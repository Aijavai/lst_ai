import { useState } from 'react'
// todos 列表需要渲染
// 函数 App 组件 组合其他的组件完成应用
// 返回html 的函数 
// html css js 用函数组合在一起，组件
// function App() {
//   // react 比vue 更纯粹
//   const todos = ['吃饭', '睡觉', '打豆豆']; // 数组 -》 数据
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>任务</th>
//           </tr>
//         </thead>
//         <tbody>
//         {
//           // 动态
//           // react 一个括号  
//           // js DOM 编程API
//           // 在html 里写js 代码
//           todos.map((item, index) => (
//             <tr>
//               <td>{index + 1}</td>
//               <td>{item}</td>
//             </tr>
//             )
//           )
//         }
//         </tbody>
//       </table>
//     </>
//   )
// }
function App() {
  // 数据-》数据状态 数据业务 改变的 数据状态
  const [todos, setTodos] = useState(['吃饭', '睡觉', '打豆豆']); 
  const [title, setTitle] = useState('xyy 侬好哇');
  setTimeout(() => {
    // todos = ['吃饭', '睡觉', '打豆豆', '养鱼']
    setTodos(['吃饭', '睡觉', '打豆豆', '养鱼'])
    setTitle('xyy 侬好哇')
  }, 3000)

  return (
    <div>
      <h1 className="title">Hello World</h1>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
          {
            // html 模板
            todos.map((item, index) => ( 
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default App