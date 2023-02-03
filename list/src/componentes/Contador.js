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
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll} onChange={() => setCheckAll(!checkAll)} />Todos
      </label>
      <p>Tarefas a Fazer: {todos.filter(todo => !todo.complete).length}</p>
    </div>
  )
}
