import { 
    useState,
    useEffect
} from 'react';


export const useTodos = () => {
    const [todos, setTodos] = useState(JSON.parse(
        localStorage.getItem('todos')
    ))
    return {
        todos,
        setTodos
    }
}
