# useLayoutEffect

- useEffect
  副作用
   - 渲染完成之后
   - 更新
   - 卸载

- useLayoutEffect
   副作用
   dom更新之后
   阻塞页面的渲染
   在页面渲染之前
  
- 能解决什么问题
  类似”同步“拿到响应式之后元素的样式
  防页面”闪烁“  useState 数据响应式更新，可能会出现元素先以旧位置显示，然后瞬间跳到新位置的“闪烁”现象。