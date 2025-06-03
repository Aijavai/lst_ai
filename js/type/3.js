// 独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc'); // label 标签
console.log(typeof sym, sym);
console.log(sym1 === sym);
// symbol 可以用于对象的key
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值ID
// ID 唯一性， Symbol
const ID = Symbol('id');
const ID1 = Symbol('id')
const age = Symbol();
// es6 之前 key 只能是字符串
// symbol 作为key 是独一无二的， 不会被覆盖
const sex = 'sex'
const user = {
     "name":'Alice',
     [age]: 19,
    // [sex]:'男',
    // 当我们在大厂，如果我们要去修改别人的代码中的对象
    // 对象是动态的 不希望出错，
    [ID]:123,
    [ID1]:456,
    [Symbol('id')]:123
}
user.age = 18
console.log(user);

 console.log(user.name, user[ID], user.age, user[age], user[ID1], user[Symbol('id')]);
// 面向对象私有属性概念？
// 对象的隐私，内部的属性，不想被外部访问，
// 可以使用Symbol 作为key 来定义


for (let key in user) { // 遍历对象
    console.log(key, user[key],'---------');
    
}