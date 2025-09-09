// babel 会读取下面这个注释，转换JSX语法时，使用Didact.createElement
/** @jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
);