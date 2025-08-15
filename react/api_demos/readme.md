# 全栈开发
## 表演型项目
= 前端 react 
- mockjs  前端伪接口
- 后端 java/node/go

## vite-plugin-mock
    - mock 
    前端在后端给出真实接口前，需要mock 一下, 前端
    - vite-plugin-mock 插件
    - mock 服务启动
    - /mock/test.js  根目录下
        export default [
            {
                url: '/api/todos',
                method: 'get',
                response: () => {
                const todos = [
                    {
                        id: 1,
                        title: '学习',
                        completed: false
                    },
                    {
                        id: 2,
                        title: '学习',
                        completed: false
                    }
                ]
                return {
                    code: 0,  // 没有错误
                    message: 'success',
                    data: todos, 
                }
            }
        }
        ]

- 前后端联调
    - 开会立项
    - 前后端 接口文档
    [
        {
            id: '',
            title: '',
            completed: true/false
        }
    ]


pnpm i axios
pnpm i vite-plugin-mock -D
