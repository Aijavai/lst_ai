# hooks todos 

- 安排个css 亮点
    - stylus
       css 超集
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite 直接编译
、、、
    npm install stylus stylus-loader --save-dev
 或
    yarn add stylus stylus-loader -D
、、、
        vite 来自vue 社区
    - react 组件设计
      - 开发任务单元
      - 设计组件
            功能 界面 状态 响应式
            - 新建todo 表单
            - 修改  列表
            - 删除
      - 按功能划分  粒度
            - form 表单组件
            - list 列表组件
                - item 列表项组件 维护和**性能**

-  字体
    - 设置多个，设备的支持 (本地包含)
    - 苹果设备 -apple-system 前端负责用户体验，字体也是体验的一部分
- rem 
    - 相对单位
    - 移动端的重要单位 移动端不要用px px是像素点，是绝对单位
        移动端 是宽高不定的 使用相对单位 rem（root em） vw/vh(viewport)
        使用相对单位，可以在所有设备上适配

- props   组件通信
    - 传递状态
    - 传递自定义事件
    - 直接解构
        const {
            todos,  // 任务
            onAddTodo  // 添加
        } = props 单独解构

- vue 和 react 区别
    - vue 好入门，api好用
    - react 倾向于原生JS  入门难
        - hooks