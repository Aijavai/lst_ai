// VNode VDOM 
// createElement 负责把 JSX 转换成“虚拟 DOM（VDOM）”对象结构
// 形如 { type, props: { ...props, children: [childVDOM...] } }
function createElement(type, props, ...children) {
    // 参数经由抽象的 VDOM 树状结构来描述 UI
    // 通过递归把任意层级的 children 归一化为 VDOM
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object"
                ? child
                // 文本节点统一包装为 TEXT_ELEMENT，便于渲染阶段统一处理
                : createTextElement(child)

            )
        }
    }
}

// createTextElement 用于将原始文本（字符串/数字）包装为标准 VDOM 结构
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

// render 负责把 VDOM 挂载为真实 DOM（此处为最小实现雏形）
// 预期签名应为 render(element, container)，当前示例中省略了形参声明
function render() {
    // 不考虑组件，仅处理原生标签与文本
    const dom = element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);

        // 过滤掉 children，只把普通属性设置到真实 DOM 上
        const isProperty = key => key !== "children";

        Object.keys(element.props)
            .filter(isProperty)
            .forEach(name => {
                // 简化处理：直接赋值到 DOM（等价于部分属性的 setAttribute 行为）
                dom[name] = element.props[name];
            })
        // 递归渲染所有子节点到当前 dom
        element.props.children.forEach(child => 
            render(child, dom)
        )

        // 将当前 dom 插入到容器中，完成一次挂载
        container.appendChild(dom);

}

// namespace 
// Didact 暴露 createElement 与 render 两个 API，模拟 React 的最小接口
const Didact = {
    createElement,// 生成VDOM,一次生成 内存中
    render // 真实DOM并挂载
}
// babel 给的
// 下方是示例：构造一个 VDOM（div#foo，其中包含 <a>bar</a> 与 <b/>）
const element = Didact.createElement(
    "div",
    { id: "foo" },
    Didact.createElement("a", null, "bar"),
    Didact.createElement("b")
);

// 将上面的 VDOM 渲染并挂到 #root 容器
Didact.render(element, document.getElementById('root'));