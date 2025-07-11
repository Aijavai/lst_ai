console.log('Start');
// Node.js 特有的微任务 
// process 进程对象
process.nextTick(() => {
    console.log('Process Next Tick');
})
Promise.resolve().then(() => {
    console.log('Promise Then');  
})
setTimeout(() => {
    console.log('haha');
    Promise.resolve().then(() => {
        console.log('Promise Then');
    })
}, 0)
console.log('end');
