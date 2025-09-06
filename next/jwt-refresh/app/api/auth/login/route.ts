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

/**
 * 用户登录接口
 * 处理用户登录请求，验证凭据并生成JWT令牌
 * @param {NextRequest} request - 包含登录凭据的请求对象
 * @returns {Promise<NextResponse>} 登录结果响应
 */
export async function POST(request: NextRequest) {
    try {
        // 1. 解析请求体，获取用户输入的邮箱和密码
        const {
            email,
            password
        } = await request.json();

        // 2. 邮箱格式验证
        if( !email || !emailRegex.test(email) ) {
            return NextResponse.json({
                error: 'Email must be a valid email address'
            }, {
                status: 400  // 客户端错误：请求格式不正确
            })
        }
        
        // 3. 密码强度验证
        if( !password || !passwordRegex.test(password) ) {
            return NextResponse.json({
                error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
            }, {
                status: 400  // 客户端错误：密码不符合要求
            })
        }

        // 4. 根据邮箱查找用户
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        
        // 5. 检查用户是否存在
        if (!user) {
            return NextResponse.json({
                error: 'User not found'
            }, {
                status: 401  // 未授权：用户不存在
            })
        }

        // 6. 验证密码
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({
                error: 'Invalid password'
            }, { status: 401 });
        }

        // 7. 为用户生成JWT双令牌
        const { accessToken, refreshToken } = await createTokens(user.id);
       
        // 8. 将刷新令牌存储到数据库中
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                refreshToken  // 更新用户的刷新令牌
            }
        })
        
        // 9. 设置安全的HttpOnly Cookie
        setAuthCookies(accessToken, refreshToken);

        // 10. 返回登录成功响应
        return NextResponse.json({
            message: 'Login successful'
        })
        
    } catch(error) {
       // 11. 错误处理：记录错误并返回服务器错误响应
       console.error('Login error:', error);
       return NextResponse.json({
        error: 'Internal server error'
       }, {
        status: 500  // 服务器内部错误
       })

    } finally {
        // 12. 清理资源：释放数据库连接
        await prisma.$disconnect();
    }
}