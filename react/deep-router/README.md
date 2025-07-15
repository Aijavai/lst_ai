# deep router

- router
- 401
- 301/302


- 前端首先加路由,开发SPA 应用
    React
    ReactRouter
    Redux

- 导航，封装
- 路由懒加载
    lazyload
    - / home
    - /about About
    只加载当前需要的组件，其他的不加载

    lazy <suspense fallback={<div>loading...</div>}>//fallback 接收一个jsx

- 懒加载的流程
    - 倒入lazy,Suspense 
        lazy 是高阶组件（参数可以接收一个组件或者返回值是组件） 
        lazy 会返回一个新组件
    - import('./pages/Home') 动态加载
    - <Route /> 匹配到 才会去动态加载响应的组件
    - Suspense 在还未加载前 fallback