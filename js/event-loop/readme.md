# event loop
事件循环机制 是js 执行机制

- js 是单线程
    同一时刻只能做一件事
    同步任务要尽快执行完，渲染页面（重绘重排），响应用户的交互（优先）
    耗时性的任务？
    - setTimeout/serInterval
    - fetch/ ajax
    - eventListener
- script 脚本
    一个宏任务

- 微任务有哪些？
  紧急的，同步任务执行完后的一个补充
    - promise.then()
    - MutationObserver
      dom 改变在页面渲染前




宏任务
- script (整体代码)：这是最开始执行的宏任务。
- setTimeout() 和 setInterval()：定时器回调函数。
- setImmediate() (Node.js)：在 I/O 事件之后，但在 setTimeout 和 setInterval 之前执行。
- I/O (输入/输出)：例如文件读写、网络请求等。
- UI 渲染 (浏览器环境)：页面的重绘和重排。
- MessageChannel (浏览器和 Node.js)：用于不同事件循环之间的通信。

微任务
- Promise 的 then()、catch()、finally() 回调：Promise 状态改变后执行的回调。
- process.nextTick() (Node.js)：这是 Node.js 特有的，它比 Promise 回调的优先级更高，会在当前操作的末尾，下一个事件循环开始前执行。
- MutationObserver (浏览器环境)：用于监听 DOM 树变化的 API。
- queueMicrotask()：一个可以直接将函数添加到微任务队列的 API。


## 多进程和多线程
- CPU
- 进程 分配资源的最小单元
- 线程 cpu调度的基本单位
程序运行以进程为单位
  - 主进程
    管理子进程 可以并发 并行
  - 主线程
  - 进程间的通信
    两个独立进程间的通信开销很大
    父子进程就好点


  - 现代浏览器通常采用多进程架构，例如Chrome
     - 浏览器主进程（Browser Process）：负责用户界面、网络请求、文件访问等。
     - 渲染进程（Renderer Process）：每个 Tab 或一组 Tab 通常会有一个独立的渲染进程，负责渲染网页内容、JavaScript 执行、布局和绘制等。页面安全，一个页面crash 了，别的页面不受影响
     - GPU 进程、插件进程等。

     - 主线程 主角
       js 单线程
        - 简单
        - DOM 编程模型 如果是多线程会产生争抢，页面渲染结果不可预期

      - setTimeout 专属定时器线程 
        定时器到时间了，将回调函数(callback) 放入宏任务队列
        放到event loop 队列中
        为什么setTimeout 不准
        回调函数的执行时机不是“立即”或“严格按照时间”，而是由事件循环根据调用栈的状态和不同任务队列的优先级来调度。
        进入event loop 机制，
        宏任务，微任务 是队列