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