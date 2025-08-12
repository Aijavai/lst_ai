const target = {
    a: 1
}

const source = {
    b: {
        name: 'lst',
        like: ['篮球','足球']
    },
    c: 1
}

// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj); 
newObj.b.name = 'hhhhh';
console.log(source);
console.log(newObj);

