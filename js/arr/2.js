// fill 一样的
// .of 是Array这个构造函数的静态方法
console.log(Array.of(1,2,3)); // 不同值的初始化
// 复杂的计算或转变
console.log(Array.from(new Array(26), 
(val, index) => String.fromCodePoint(index + 65)));