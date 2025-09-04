import {
    NextRequest,
    NextResponse
} from 'next/server';
import {
    prisma
} from '@/lib/db';
import { error } from 'console';
import bcrypt from 'bcryptjs';
// restuful
// 正则，匹配规则，符号数学
// . 什么都匹配，匹配一个
// + 至少一个
// @ email 必须要有的字符
// .+@ 在@前面至少要有一个字符
// \. 一定要有一个. 
const emailRegex = /.+@.+\..+/; // RegExp
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export async function POST(request: NextRequest) {
    // 容错处理 稳定为主
    try {
        const {
            email,
            password
        } = await request.json();
        // 正则表达式 校验邮箱
        if( !email || !emailRegex.test(email) ) {
                return NextResponse.json({
                    error: 'Email is required and must be a valid email address'
            }, {
                status: 400
            })
        }
        if( !password || !passwordRegex.test(password) ) {
            return NextResponse.json({
                error: 'Password is required and must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
            }, {
                status: 400
            })
        }

        // 检查用户是否存在
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(existingUser) {
            return NextResponse.json({
                error: 'User already exists'
            }, {
                status: 400
            })
        }

        // 密码的单向加密
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword,'----------');
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json({
            message: 'User created successfully'
        }, {
            status: 201
        })
} catch(error) {
    return NextResponse.json({
        error: 'Internal server error'
    }, {
        status: 500
    })
}
}