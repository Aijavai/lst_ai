const  target = {
    a: 1
};

Object.assign(target, null)
Object.assign(target, undefined)
console.log(typeof undefined);
console.log(typeof null);

console.log(target);

const obj = {name: '张三'};
Object.assign(obj)
obj.name = '李四';
console.log(obj);