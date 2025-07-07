# react 事件机制
- js 事件机制
    - 异步
    - 监听一个事件
      - addEventListener() 标准的DOM2 级事件
      - DOM0 级事件 <a onclick="doSomething()"> <a/>
      - DOM1 级版本，没有去做事件升级

- addEventListener(type, listener, useCapture?)
    - 回调函数 callback 是异步处理的总称
    - promise then 
    - async await
    监听器
- 注册事件 addEventListener
- useCapture false 默认值
    页面是浏览器渲染引擎按像素点画出来的 可以想象成一个png 
    先捕获 douvument -> 一层层去问
        鼠标点了谁？
        先触发父元素
    event.target
        捕获阶段结束，拿到event.target
    冒泡
        event.target 冒泡到html 
        事件让他在冒泡阶段执行
        在哪个阶段执行