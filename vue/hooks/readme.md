# vue 中的hooks
- 你用的react 是什么版本的？
    react 19
    react 16.8 划时代的更新  函数式组件，hooks 2019年
    之前都是 类组件 Component 基类
    函数组件 子组件 + 父组件通过props传递数据 无状态组件
    UI 展示 Stateless 简单，性能好 
    函数组件 + useState + useEffect.. hooks 类组件就没有必要了

- 类组件
    各司其职
    - 类组件比较固受于类的格式，繁琐
    - this 丢失问题 事件处理函数
    - 生命周期 由useEffect 副作用 代替
    - 开销大些 函数组件结合memo, useMemo 更好的性能优化

    - Vue 抄袭了React
        hooks 函数式编程思想

- vue 和 react 相同点和区别