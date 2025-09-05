import {
    NextRequest,
    NextResponse
} from 'next/server';
import {
    prisma
} from '@/lib/db';
import {
    emailRegex,
    passwordRegex
} from '@/lib/regexp';
import {
    createTokens,
    getJwtSecretKey
} from '@/lib/jwt';
import {
    setAuthCookies
} from '@/lib/jwt';
import bcrypt from 'bcryptjs';
export async function POST(request: NextRequest) {
    try {
        const {
            email,
            password
        } = await request.json();

        if( !email || !emailRegex.test(email) ) {
            return NextResponse.json({
                error: 'Email must be a valid email address'
            }, {
                status: 400
            })
        }
        if( !password || !passwordRegex.test(password) ) {
            return NextResponse.json({
                error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
            }, {
                status: 400
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return NextResponse.json({
                error: 'User not found'
            }, {
                status: 401
            })
        }

        const { accessToken, refreshToken } = await createTokens(user.id);
       
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                refreshToken
            }
        })
        
        setAuthCookies(accessToken, refreshToken);

        return NextResponse.json({
            message: 'Login successful'
        })
    } catch(error) {
       console.error(error);
       return NextResponse.json({
        error: 'Internal server error'
       }, {
        status: 500
       })

    } finally {
        // 释放数据库对象
        await prisma.$disconnect();
    }
}