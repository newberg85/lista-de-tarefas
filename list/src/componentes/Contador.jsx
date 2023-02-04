import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider'

export default function Contador() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    return (
    <div className=" flex justify-between w-[57rem]">
      <label htmlFor="all fixed">
        <input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll} onChange={() => setCheckAll(!checkAll)} />Todos
      </label>
      <div className='flex gap-[1rem]'>
      <p className='text-right text-[#437EB1]'>Tarefas a Fazer: {todos.filter(todo => !todo.complete).length}</p>
      <p className='text-right text-[#038B00]'>Tarefas Concluidas: {todos.filter(todo => todo.complete).length}</p>
      </div>
      {todos.filter(todo => todo.complete).map(todo => (
        <p key={todo.id} className='fixed w-[5rem]'>
          {todo.text}
        </p>
      ))}
    </div>
  )
}
