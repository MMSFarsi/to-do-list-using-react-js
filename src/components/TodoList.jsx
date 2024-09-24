import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div className='card mt-3'>
        <div className="card-body">
         {todos.map((todo,index)=> 
          <Todo key={index} todo={todo} index={index}/>) }
          
        </div>
    </div>
  )
}

export default TodoList