let arr1 = [
    {
        name: '张三',
        like: ['吃饭', '睡觉']
    },
    function() {
        console.log('函数拷贝不了');
        
    }
]

let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].name = 'lisi';
arr2[0].like.push('篮球');
console.log(arr1, arr2);