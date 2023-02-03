import React, {useState} from 'react';
import Delete from './Delete';

export default function Listitem({todo, id, checkComplete, handleEditTodos}) {


  const [onEdit, setOnEdit] = useState(false)
  const[editValue, setEditValue] = useState(todo.name)

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

  if(onEdit){
    return (
      <li>     
              <input type="text" id="editValue" value={editValue} name="editValue" onChange={(e => setEditValue(e.target.value.toLowerCase()))}/>
              <button onClick={() => handleSave(id)}>Salvar</button>
              <button id="delete" onClick={'deletar'}>delete</button>
         
      </li>
    )
  }else{
    return (
      <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
              <input type="checkbox" id={id} checked={todo.complete}
              onChange={() => checkComplete(id)}/>
              {todo.name}
              <button disabled={todo.complete} onClick={handleOnEdit}>edit</button>
              <Delete/>
            </label>
      </li>
    )
  }

}