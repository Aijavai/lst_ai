const s = Symbol('id');  // 独一无二  作为对象的属性
const source = {
    [s]: 123,
    a: 1
}
const target = [];
Object.assign(target, source);

console.log(target);

// Object.assign 会把 source 的可枚举自有属性拷贝到 target