import React from 'react'
import Btn from './Btn'
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

const Todo = ({todo,index}) => {
  return (
    <div className='card shadow p-3 mb-2'>
    <div className="row">
        <div className="col-8">
            <h4>{++index}.{todo}</h4>
        </div>
        <div className="col-4 text-end">
            <div className="btn-group">
                <Btn className='btn-sm'><FiEdit /></Btn>
                <Btn className='btn-danger btn-sm'><TiDelete /></Btn>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Todo