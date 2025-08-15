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