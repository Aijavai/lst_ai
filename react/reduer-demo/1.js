// 纯函数
// 相同的输入，一定会有一样的输出
// 没有副作用不操作外部变量，不发请求，不改DOM
function add(a, b) {
    return a + b;
}


// 不纯的函数
let total = 0;
function addToTotal(a) {
    total += a;
    return total;
}