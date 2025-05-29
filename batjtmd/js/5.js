// 全局作用域
function fn(){ // 函数作用域
    //console.log(a); // undefined 变量提升
    console.log(b);
    let a = 2;
    if(true){ // let 支持块级作用域（高级语言的特性） var 不支持
        var b = 2;
       // let b = 3;
    }
   
}
fn();
if(false) { // 块级作用域
    let value = 1; // 
}
// 在全局找不到

//console.log(value);