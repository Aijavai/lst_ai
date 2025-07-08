import {
    useState,   // 私有状态
} from 'react';

const TodoForm = ({onAddTodo}) => {
    // 数据
    // props 参数数据
    // state 私有的数据
    // 单项数据流
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let result = text.trim();  // dry dont repeat yourself
        if (!result) return;
        onAddTodo(result);
        setText('');  // 数据状态和界面状态一致要敏感
    }
    // JSX 一定要有唯一的最外层元素 树状结构，编译解析JSX,
    return (
   <>
    <h1 className="header">TodoList</h1>
    <form className='todo-input' onSubmit={handleSubmit}>  {/** 表单提交事件,类型DOM0级事件 */}
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='请输入待办事项'
        required
        />
        <button type='submit'>Add</button>
    </form>
   </>
    )
}
export default TodoForm