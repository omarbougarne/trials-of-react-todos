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
  


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addTodo = () => {
    setTodos([...todos, {id: Date.now(), text: inputValue, completed: false}])
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
          <List items={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
    </div>
      
    </>
  )
}

export default App
