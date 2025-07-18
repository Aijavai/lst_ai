// {} key:value 0(1)时间复杂度 HashMap Map
// 第一种重要数据结构
// 第二种重要数据结构 链表、队列、栈
// 长度限定、类型
// 可以、动态自动扩容

const arr = [1, 2, 3];
const arr2 = new Array(4).fill(undefined)
console.log(arr2);
arr2[8] = undefined;
console.log(arr2);
for(let key in arr){
    console.log(key, arr[key]);
}
for(let key of arr){
    console.log(key);
}