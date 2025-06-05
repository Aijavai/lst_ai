// 枚举类型
const STATUS = {
        // 常量
        "READY":symbol('ready'), // 准备中
        LOADING:symbol('loading'), // 加载中
        ERROR:symbol('error') // 错误
    }

let state = STATUS.READY; 
if (state === STATUS.READY) {
    console.log('ready'); 
}