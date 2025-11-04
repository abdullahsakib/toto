import React, { useEffect, useState } from 'react'
import { fetchTodos, createTodo, toggleTodo, deleteTodo } from '../api'

export default function TodoList(){
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ load() }, [])

  async function load(){
    try{
      setLoading(true)
      const data = await fetchTodos()
      setTodos(data)
    }catch(e){
      console.error(e)
    }finally{
      setLoading(false)
    }
  }

  async function add(e){
    e.preventDefault()
    if(!title.trim()) return
    const t = await createTodo(title)
    setTodos(prev => [t, ...prev])
    setTitle('')
  }

  async function handleToggle(t){
    const updated = await toggleTodo(t.id, !t.completed)
    setTodos(prev => prev.map(x => x.id === t.id ? updated : x))
  }

  async function handleDelete(t){
    if(!confirm('Delete this todo?')) return
    await deleteTodo(t.id)
    setTodos(prev => prev.filter(x => x.id !== t.id))
  }

  return (
    <div>
      <form onSubmit={add} style={{ marginBottom: 12 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New todo" />
        <button style={{ marginLeft: 8 }}>Add</button>
      </form>

      {loading ? <div>Loading...</div> : null}

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map(t => (
          <li key={t.id} style={{ marginBottom: 8 }}>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={t.completed} onChange={()=>handleToggle(t)} />
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</span>
            </label>
            <button onClick={()=>handleDelete(t)} style={{ marginLeft: 12 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
