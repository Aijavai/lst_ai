// 如何遍历数组
// - for (let i = 0...)  计数循环  性能好  可读性不好  

import { log } from "console"

// - while      for 和 while 机械化，适合底层，不适合人脑
// - forEach       
// - map filter find some every ...
// - for of 

const names = Array.of('Alice', 'Bob', 'Charlie', 'David');
console.log(names);
names.forEach(name => {
    if (name == 'Charlie'){
    console.log("Charlie is here, stop...");
    return;
    }
    
})
