import {
    SignJWT,
    jwtVerify
} from 'jose';
import {
    cookies
} from 'next/headers';
export const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) throw Error("JWT_SECRET_KEY is not set");
    // 将secret 转换为Uint8Array
    return new TextEncoder().encode(secret);
}

export const createTokens = async (userId: number) => {
    const accessToken = await new SignJWT({userId})
    // 创建JWT 载荷
    // 设置头部，指定使用HS256算法签名
    .setProtectedHeader({alg: 'HS256'})
    // 设置签发时间 当前时间
    .setIssuedAt()
    .setExpirationTime('15min')
    // 使用secret 签名
    
    .sign(getJwtSecretKey());
    
    const refreshToken = await new SignJWT({userId})
    // 创建JWT 载荷
    // 设置头部，指定使用HS256算法签名
    .setProtectedHeader({alg: 'HS256'})
    // 设置签发时间 当前时间
    .setIssuedAt()
    .setExpirationTime('7d')
    // 使用secret 签名
   
    .sign(getJwtSecretKey());
    return {
        accessToken,
        refreshToken
    }
}

export const setAuthCookies = async (accessToken: string,
    refreshToken: string) => {
        const cookieStore = await cookies();
        cookieStore.set('accessToken', accessToken, {
            // 黑客XSS 攻击 js 试图获得cookie
            httpOnly: true,  // 不能用javascript 操作cookie
            maxAge: 15 * 60 ,
            sameSite: 'strict',
            path: '/'
        });
        cookieStore.set('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60, // 7天
            sameSite: 'strict',
            path: '/'
        });
    }
