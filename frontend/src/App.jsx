import React from 'react'
import TodoList from './components/TodoList'

export default function App(){
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  )
}
