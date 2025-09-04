- 安装依赖
npx create-next-app@latest jwt-refresh
pnpm i prisma @prisma/client

- 启动
npx prisma init
npx prisma migrate dev --name init  //将 Prisma 数据模型同步到数据库

# next.js 全栈项目

- users & posts
- jwt 双token 鉴权
- 虚拟列表 
    AI 爬虫 掘金100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool 
    mcp 
- ai 搜索
    embedding 

## 开发流程
- .env 
    mysql url
    create database 9_3_demo; 建立数据库;
- prisma 初始化
    orm 工具
    object relation mapping
    User(表) => User类
    一行     => new User() 实例
    底层数据库操作 映射成 高级的面向对象操作

- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，
用于生成类型安全的数据库客户端。
    prisma schema 是数据库的设计图
    **schema + git 留下数据库设计和修改的历史**
    **文档型的，可以追踪。留底**

- Model 表的映射模型
    @@map("users") 指定模型对应的表名
    posts         Post[]    一对多的关系
    createAt updateAt primsa 自动维护
    @id 主键 @unique 唯一索引
    Model User {
        columns name type  @default
        索引
        relation
    }


    - migration  迁移
        记录

- restful API
- lib/ 复用的js 模块
- regexp 
    前端，后端要会正则


- bcryptjs 加密js 模块  单向的加密算法 （不能被解密）
    register 加密一次
    login  password 加密一次
    比较的是加密后的串是否一样？
- 状态码
    - 200 ok
    - 201 Created 
    - 400 Bad Request
    - 409 Conflict
    - 500 Internal Server Error