# 居中   （讲出每一种的优劣）

- 听清是什么居中
    - 水平垂直
- 方式不是关键，区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding,
    - **固定宽高** 块级盒子水平垂直居中  
        - absolute + margin 负值
          缺点需要知道盒子的宽高
        - absolute + margin= auto (重要)(一定要设置宽高)
        - absolute + calc   (css calc 计算函数)  缺点是：性能差，很少用   应用场景：对话框、提示框的偏移、动态定位（从屏幕外移入）

    - 不固定宽高块级盒子水平垂直居中
        absolute + transform
        line-height + vertical-align  (父元素要设置line-height)
        方法三：writing-moden  控制文字书写方式
        方法四：table-cell
        方法五：flex
        方法六：grid 布局

        实际应用建议
            导航栏居中：使用Flexbox
            模态框居中：使用绝对定位 + Transform
            卡片内容居中：使用Flexbox或Grid
            响应式布局：优先考虑Flexbox和Grid
            兼容性要求：使用绝对定位方案

            