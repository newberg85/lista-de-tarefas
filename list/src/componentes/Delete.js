import React from 'react'
import { DataContext } from './DataProvider';


export default function Delete() {
    const deletar = () => {
        const newTodos = todos.filter(todo =>{
          return todo.complete === false
        })
        console.log(deletar)
      }
  return (
    <button id='delete' onClick={deletar}></button>
  )
}
