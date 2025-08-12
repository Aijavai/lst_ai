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

Object.assign(target, source);
console.log(target);
target.b.like[0] = '橄榄球';
console.log(source);
target.c = 3;
console.log(target);
console.log(source);

