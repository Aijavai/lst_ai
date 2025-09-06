import {
    SignJWT,
    jwtVerify
} from 'jose';
import {
    cookies
} from 'next/headers';

/**
 * 获取JWT密钥
 * 从环境变量中读取JWT_SECRET_KEY，并转换为Uint8Array格式
 * @returns {Uint8Array} 编码后的密钥
 * @throws {Error} 当环境变量未设置时抛出错误
 */
export const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) throw Error("JWT_SECRET_KEY is not set");
    // 将secret 转换为Uint8Array，jose库需要这种格式
    return new TextEncoder().encode(secret);
}

/**
 * 创建JWT双令牌
 * 为用户生成访问令牌和刷新令牌
 * @param {number} userId - 用户ID
 * @returns {Promise<{accessToken: string, refreshToken: string}>} 包含两个令牌的对象
 */
export const createTokens = async (userId: number) => {
    // 创建访问令牌 - 短期令牌，用于API访问授权
    const accessToken = await new SignJWT({userId})
    // 创建JWT 载荷，包含用户ID
    // 设置头部，指定使用HS256算法签名
    .setProtectedHeader({alg: 'HS256'})
    // 设置签发时间 当前时间
    .setIssuedAt()
    .setExpirationTime('15min') // 15分钟过期
    // 使用secret 签名
    .sign(getJwtSecretKey());
    
    // 创建刷新令牌 - 长期令牌，用于刷新访问令牌
    const refreshToken = await new SignJWT({userId})
    // 创建JWT 载荷，包含用户ID
    // 设置头部，指定使用HS256算法签名
    .setProtectedHeader({alg: 'HS256'})
    // 设置签发时间 当前时间
    .setIssuedAt()
    .setExpirationTime('7d') // 7天过期
    // 使用secret 签名
    .sign(getJwtSecretKey());
    
    return {
        accessToken,
        refreshToken
    }
}

/**
 * 设置认证Cookie
 * 将访问令牌和刷新令牌设置为安全的HttpOnly Cookie
 * @param {string} accessToken - 访问令牌
 * @param {string} refreshToken - 刷新令牌
 */
export const setAuthCookies = async (accessToken: string,
    refreshToken: string) => {
        const cookieStore = await cookies();
        
        // 设置访问令牌Cookie
        cookieStore.set('accessToken', accessToken, {
            // 防止XSS攻击：JavaScript无法访问此Cookie
            httpOnly: true,  
            maxAge: 15 * 60, // 15分钟，与令牌过期时间一致
            sameSite: 'strict', // 防止CSRF攻击
            path: '/' // 全站可用
        });
        
        // 设置刷新令牌Cookie
        cookieStore.set('refreshToken', refreshToken, {
            httpOnly: true, // 防止XSS攻击
            maxAge: 7 * 24 * 60 * 60, // 7天，与令牌过期时间一致
            sameSite: 'strict', // 防止CSRF攻击
            path: '/' // 全站可用
        });
    }

/**
 * 验证JWT令牌
 * 验证令牌的有效性和完整性
 * @param {string} token - 要验证的JWT令牌
 * @returns {Promise<object|null>} 验证成功返回载荷对象，失败返回null
 */
export const verifyToken = async (token: string) => {
    try {
        // 使用jose库验证令牌
        const {payload} = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        // 令牌无效、过期或格式错误时返回null
        console.error('Token verification failed:', error);
        return null;
    }
}