import React, {useState} from 'react';
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Listitem({todo, id, checkComplete, handleEditTodos, handleDeleteTodos}) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () => {
    setOnEdit(true)
  }

  const handleSave = id => {
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditValue(todo.name)
    }
  }

  const handleDelete = id => {
    handleDeleteTodos(id)
  }

  /*const deleteTodo = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
    })
    setTodos(newTodos)
  }*/

  if(onEdit){
    return (
      <li  className=''>     
              <input type="text" id="editValue" value={editValue} name="editValue" onChange={(e => setEditValue(e.target.value.toLowerCase()))} className='bg-[#1B1D37] text-[#fff] w-[49rem] p-[10px] items-center '/>
              <button onClick={() => handleSave(id)} className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#1B1D37] text-[#fff] p-[10px]'>Salvar</button>
              <button id="delete" onClick={() => handleDelete(id)}>delete</button>
      </li>
    )
  }else{
    return (
      <li className='m-[1rem]'>
            <label htmlFor={id} className={todo.complete ? "active" : ""} >
              <div className='flex gap-[0.5rem]'>
              <div className='bg-[#1B1D37] p-[.5rem] text-[2rem] '>
              <input type="checkbox" id={id} checked={todo.complete}
              onChange={() => checkComplete(id)} className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" items-center '/>
              </div>
              <p className='bg-[#1B1D37] text-[#fff] w-[52rem] p-[10px] items-center '>{todo.name}</p>
              <div className='flex flex-col-reverse gap-[5px]'>
              <button disabled={todo.complete} onClick={handleOnEdit} className='bg-[#797979] text-[#fff] p-[0.3rem]'><FiEdit/></button>
              <button id="delete" onClick={() => handleDelete(id)} className='bg-[#CE0000] text-[#fff] p-[0.3rem]'><FiTrash2/></button>
              </div>
              </div>
            </label>
      </li>
    )
  }

}
