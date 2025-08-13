let obj1 = {
    name: '张三',
    age: 20
}

let obj2 = obj1;  // 没有实现拷贝 
// 引用式赋值, 不是复印，只是应用传递。取了个别名，还是一个东西。指向同一个地址。
obj2.age = 99;

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

// 怎么实现数组对象的拷贝？