import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

// 定义需要认证的路径
const protectedRoutes = ["/dashboard", "/profile"];
// 定义公共路径（不需要认证）

// 中间件层，处理请求的身份验证和路由控制
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // 如果是公共路径，直接放行
  if (!protectedRoutes.some((p) => path.startsWith(p))) {
    return NextResponse.next();
  }

  const refreshToken = request.cookies.get("refresh_token")?.value;
  const accessToken = request.cookies.get("access_token")?.value;

  console.log("refreshToken", refreshToken);
  console.log("accessToken", accessToken);

  // 如果没有token，重定向到登录页
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 尝试使用accessToken
  // 如果存在访问令牌，尝试验证其有效性
  if (accessToken) {
    const accessPayload = await verifyToken(accessToken);
    
    // 如果访问令牌有效，将用户信息添加到请求头中
    if (accessPayload) {
      // 创建新的请求头对象，基于原始请求头
      const requestHeaders = new Headers(request.headers);
      
      // 将用户ID添加到自定义请求头中，供后续页面组件使用
      // 这样页面组件就可以通过 headers.get('x-user-id') 获取当前用户ID
      requestHeaders.set("x-user-id", accessPayload.userId as string);
      
      // 继续处理请求，并传递包含用户信息的请求头
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  // 如果访问令牌无效或不存在，尝试使用刷新令牌进行无感刷新
  if (refreshToken) {
    const refreshPayload = await verifyToken(refreshToken);
    
    // 如果刷新令牌有效，重定向到刷新接口进行令牌更新
    if (refreshPayload) {
      // 构建刷新接口的URL，使用绝对路径避免相对路径问题
      const refreshUrl = new URL("/api/auth/refresh", request.url);
      
      // 将当前请求URL作为重定向参数，刷新成功后回到原页面
      refreshUrl.searchParams.set("redirect", request.url);
      
      // 重定向到刷新接口，实现无感刷新
      return NextResponse.redirect(refreshUrl);
    }
  }

  // 如果访问令牌和刷新令牌都无效或不存在，说明用户未登录
  // 重定向到登录页面，要求用户重新认证
  return NextResponse.redirect(new URL("/login", request.url));
}
