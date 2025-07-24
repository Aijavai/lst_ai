import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'

function App() {

  return (
    <>
      <Counter />
      <TodoList />
      <RepoList />
    </>
  )
}

export default App
