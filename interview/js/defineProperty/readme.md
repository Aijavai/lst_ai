# 响应式底层

- DOM API -> 响应式业务 自动化
- Object.defineProperty(obj, 'value', {
    get,
    set
})
    对象上的某个属性的某些行为(get, set) 进行定义，在完成本来的职责的同时，去做dom 更新，这就是响应式
- 缺点呢？ 有点麻烦，每次只能定义一个属性
拦截行为
- obj.value
- REACT,VUE 现代前端MVVM 框架，早期用Object.defineProperty
  实现响应式，现在使用Proxy
- es6 Proxy 可以一次代理整个对象，代理的行为更多

- 属性描述符 (property descriptor)
    configuable 是否可配置 修改或删除