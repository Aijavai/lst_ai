import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        const newTodos =[...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='todo-app'>
            <h1>Todo List</h1>

            <TodoInput 
            value = {inputValue}
            onChange = {setInputValue}
            onAdd = {addTodo}
            />
            <TodoList 
            todos = {todos}
            onRemove = {removeTodo}
            />
        </div>
    );
}