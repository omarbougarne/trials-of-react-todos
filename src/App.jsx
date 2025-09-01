import { useEffect, useState } from 'react'
import './App.css'
import Input  from './components/elements/input'
import Button  from './components/elements/button'
import List  from './components/elements/List'
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [inputValue, setInputValue] = useState('')
  const [editValue, setEditValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addTodo = () => {
    setTodos([...todos, {id: Date.now(), text: inputValue, completed: false}])
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditingValue(text)
  }
  const saveEdit = () => {
    setTodos( todos.map( todo =>
      todo.id === editingId ? {...todo, text:editValue} : todo
    ))
    setEditingId(null)
    setEditValue('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditValue('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }
  return (
    <>
    <div className='app'>
      <h1>To do</h1>
        <div className='add-todo'>

          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <Button text="Add" onClick={addTodo} type="primary"/>
        </div>
          <List 
          items={todos} 
          onDelete={deleteTodo} 
          onToggle={toggleTodo}
          onEdit={startEditing}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          />
    </div>
      
    </>
  )
}

export default App
