# react-router-dom

- 路由？
  - 后端路由
    暴露资源
  - 前端路由
    - 首页
    - 列表页
    - 登录...
    前端页面导航由前端路由负责
- react 开头
  react 生态系统的一部分
  - react 负责 响应式、状态管理、组件、hooks等核心功能
  - react-router-dom
  - redux/mobx
  - axios
## react 开发全家桶
- react 19
- react-dom 19
- react-router-dom  7.6.3  大版本，小版本，紧急更新

## react 特色
- 全面组件化
react 函数化编程

- 动态路由
  https://juejin.cn/users/123?a=1&b=2#hash
  path/users/123:id params
# restful 国际规范
url 定义是核心部分
Method 资源的描述
GET /user/:id
GET /post/:id  显示某篇文章

PUT(完全替换)  PATCH(局部修改)
上传头像 使用PUT /avatar/:id
- 后端路由 暴露资源

- 前端路由 应用于单页应用 (Single Page Application, SPA)


- 后端路由 
  早期只有后端路由
  server -> http -> 路由（后端） -> 响应html网页 传统的后端驱动的web 开发方式 
  展示下一个页面 再来一个请求
  /
  /about 
  - 好处是足够简单
  - 前后端耦合  后端要写前端的页面   
  - 逻辑，查数据库，套页面  MVC 开发方式 Model(数据)View(视图)Controller(控制器)
  - 不再以返回页面为目的
  - /api/user/123

- 前后端分离  MVVM Model(fetch api) VIew(JSX) ViewModel(视图模型层 useState, 数据绑定JSX)
  - 前后端联调 api开发文档 一个约定
  - 前后端分离开发， 以API 开发文档为约定
  - 前端也有了路由
  - html/css/js react 框架