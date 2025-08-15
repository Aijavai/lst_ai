
# jwt 登录鉴权

- 会话授权
    - 服务器知道我们是谁？
    - http 是无状态的
        - 请求头 cookie
        - server 端保存会话状态，cookie  唯一sid 值  sid => user
        - 每次请求带上cookie 读取sid
            - server 端通过cookie判断是不是同一个用户
            - server 端会话保存 token  

另外一种登录鉴权方法：
- 登录和用户鉴权方案JWT JSON WEB TOKEN 
    - {id:112, username:'admin', level:4.....}  user JSON 格式的数据
    - 一种算法 生成一个hash 串
    - token 服务器端令牌 
    - 客户端存储token 
    - 客户端每次请求 服务端收到请求时  验证token 
    - 然后根据token 判断用户是不是合法用户


- jsonwebtoken 
    jwt 鉴权的库
    sign 颁发一个token 
    verify 验证token 
    - pnpm i jwt
    - pnpm i jwt form "jsonwebtoken"
    - sign 