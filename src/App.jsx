import React, { useState } from 'react'
import AddToDo from './components/AddToDo'
import "./todo.css"
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos]=useState([])
  
  return (
    <div className='wrapper'>
      
        <AddToDo setTodos={setTodos}/>
        <TodoList todos={todos} />
    </div>
  )
}

export default App