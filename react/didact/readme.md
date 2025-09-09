安装依赖
- npm init -y
- pnpm i @babel/core @babel/cli babel-loader @babel/preset-react -D

运行
- npx babel src/index.jsx -o dist/complied.js
# 手写React

    - Dideact
    - 命名空间 namespace
    - 对象字面量

- VDOM
    UI 表达 JSX
    JSX -> 转成VDOM ?

- JSX react 优点
    js 里编写HTML, 极其简单的表达UI
    babel React.createElement
    Dideact.createElement
    
    React.createElement 返回的是一个轻量级的普通 JavaScript 对象（即 React 元素），它描述了你希望在屏幕上看到的内容，而不是实际的 DOM 节点。ReactDOM 会根据这个对象来决定如何更新实际的 DOM。

## createElement

- App.jsx -> babel -> Dideact.createElement(tag, props, ...children)
    返回的结果 VDOM
    由Vnode 节点组成的VDOM　树，每个节点包含type, props
    两个属性, props.children 是子节点，也是一个对象
-> render 生成真正的DOM

- babel 将JSX 转译为React.createElement 方法调用，
    给相应的参数，生成VDOM
    @babel/preset-react pragma 编译后的函数名

React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），
它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 这么复杂？
    type 没有的
    children 没有的
    统一，执行render 

## 目前完成
- React is a namespace
- The createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fibers 机制 可中断

## Concurrent Mode 并发模式
React Concurrent Mode 是一种让渲染过程可中断、可优先级排序的机制，
通过将工作拆分为小块并允许高优先级更新（如用户输入）插队，
从而避免主线程阻塞，提升应用的响应性和流畅度。
fiber 节点就是工作节点 
- 中断
- 继续
- fiber 节点对象有哪些属性