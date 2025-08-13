// # 怎么用的 参数的默认值
// 默认值， 用户会传的，Object.assign 收入囊中
// 目标对象是{}空对象 合并用户传参和默认参数, 合并配置文件对象
function createUser(options) {
    const defaults = {
        name: 'niming',
        age: 18,
        isAdmin: false
    }

    const config = Object.assign({}, defaults, options);
    console.log(config);
    
}

createUser({name:"lisi", age:25})

const baseConfig = { api: '/api', tiomeout: 500 };
const envConfig = { timeout:1000, debug: true };
const finalConfig = Object.assign(
    {},
    baseConfig,
    envConfig
)
console.log(finalConfig);
