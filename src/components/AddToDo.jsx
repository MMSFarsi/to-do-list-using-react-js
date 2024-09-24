import React, { useState } from 'react'
import Btn from './Btn'
import { FaPlusSquare } from "react-icons/fa";


const
    AddToDo = ({setTodos}) => {
        const[input, setInput] =useState('')
        // Form Submit
        const formSubmit=(e)=>{
            e.preventDefault();
            if(input.length<=3){
               return false
            }
            setTodos(prev=>[...prev, input]);
            setInput('')
           
            
        }


        return (
           <div className="card">
            <div className="card-body">
            <form onSubmit={formSubmit}>
            <div className='d-flex'>
               
                <input
                onChange={(e)=> setInput(e.target.value)
                }
                value={input} className='form-control' type="text" placeholder='Add To Do' />
              <Btn className="col-4 btn-dark">
                Add todo <FaPlusSquare /></Btn> 
            </div>
            </form>
            </div>
           </div>
        )
    }

export default
    AddToDo