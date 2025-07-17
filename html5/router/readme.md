# 路由

history
hash

- 传统页面开发
    重要的用户体验缺失
    - 需要去到后端拿到新的html，重新渲染
        白屏
    - a 链接切换页面
    - 相比于react-router-dom 局部热更新
    由前端路由 负责

- 新的react-router-dom SPA 单页面应用
    只有一个页面 但能带来多页面效果

## SPA 
- Single Page Application **特点**是：在加载过程中只加载一次 HTML 页面，然后通过 JavaScript 动态地重写当前页面的内容，而不是在用户每次交互时都从服务器重新加载整个页面。
- 只有一个页面
    - react 组件
        页面级别组件
    - Routes/Route 申明，文档流中占位
    - Routes外面，Outlet 外面 不用更新的
    - url  
    - Route 内部显示哪个页面组件，进行热更新

## 核心
- url 切换
    不能用 a
    Link
    不去重新发送请求，
    事件，js 动态加载
- 事件 hashChange/ pushState
- 根据当前的url 取对应的组件
    替换掉之前的页面级别组件
- 体验是


## url 改变，但不重新渲染的解决方案
- hash 的改变
    原来是用来页面锚点，长页面的电梯
    不会刷新页面
    #/
    #/about
- 事件
    hashChange
- 


## 基于SPA
- url 可以改变，但不会向后端发送请求 前端路由
    - hash + hashchange 事件 + DOM
    - history + pushState/popState
- 前端路由 react-router-dom 配置 页面级别组件
    热更新 Route
    Outlet
- 单页应用
    只有一个页面 但可以有多个url 路由状态
    页面级别组件
    window.location window.history 
    栈
    State 

- history 
    很早就有，在浏览器历史记录里游走
    - html5 赋予history 新的功能
    - hash + hashchange 有优点，但有很大的缺点
        兼容性好
        缺点 https://127....#home
        #home 哈希不好理解 只有前端路由有