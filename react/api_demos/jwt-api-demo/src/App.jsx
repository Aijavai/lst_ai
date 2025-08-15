import { 
  useState,
  useEffect 
 } from 'react'
import './App.css'
import {
  getTodos
} from '@/api'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const todoList = await getTodos()
      console.log(todoList.data.data);
      setTodos(todoList.data.data)
    }
    fetchData();
  }, [todos])
  return (
    <>
      {
        todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      }
    </>
  )
}

export default App
