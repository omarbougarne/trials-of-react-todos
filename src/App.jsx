import { useState } from 'react'
import './App.css'
import Input  from './components/elements/input'
import Button  from './components/elements/button'
import List  from './components/elements/List'
function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  const addTodo = () => {
    setTodos([...todos, {id: Date.now(), text: inputValue}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <>
    <div className='app'>
      <h1>To do</h1>
        <div className='add-todo'>

          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <Button text="Add" onClick={addTodo} type="primary"/>
        </div>
          <List items={todos} onDelete={deleteTodo}/>
    </div>
      
    </>
  )
}

export default App
