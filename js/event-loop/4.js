const promise1 = Promise.resolve('First Promise')
const promise2 = Promise.resolve('Second Promise')
const promise3 = new Promise(resolve => {
    resolve('Third Promise')
})
promise1.then(value => console.log(value));
