// 消灭数组，留下一个
console.log([1,2,3,4,5,6].reduce((prev, curr) => {
    return prev + curr;
}, 0))