# Array 的高级考点？

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于c++, 固定大小的分配 v8 引擎对arr进行一个设计
    - 灵活地拓展，不限类型，背后还有hash的特性 for key in
    - empty*5 empty代表key 没有释放 所以 for key in 不可以迭代
    - new Array(5).fill(undefined) 统一
- [] 数组字面量 
    [] 
- 静态方法 
    Array.of(1, 2, 3)  // 已经有了数据
    Array.form() // 转换，(类数组，填充计算)