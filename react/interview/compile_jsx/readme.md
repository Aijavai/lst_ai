- JSX 的本质？
    - JavaScript的语法拓展，增强组件UI的直观性。
    - JSX不能独立运行
    - vite 工程化
        jsx -> React.createElement


- babel    JavaScript 编译器 向后兼容
    Make JavaScript Greate again!
    大胆使用JS 最新语法，不用等待
    es6 promise -> es8 async await
    let -> var
    () => {} -> function() {} 
  

    ​语法降级​：让开发者能用最新语法写代码。
    ​扩展性​：支持 JSX、TypeScript 等非标准语法。
    ​兼容性​：填补浏览器/环境的 API 差异。

- 编译的流程
    - pnpm i @babel/cli @babel/core -D
        @babel/cli    babel的命令行工具
        @babel/core   babel的核心工程
        babel 负责JS 转码 es6 ->es5 或更早的
        -D 开发阶段的依赖 dev 
        上线后是不用的 
    - ./node_modules/.bin/babel 
        配置转换的规则 
        react -> IOS 代码 
        es6+ -> es5
        JSX -> React.createElement