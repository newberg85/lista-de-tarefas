import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
      try {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
      } catch (error) {
        console.error(error)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])


  
  return (
    <DataContext.Provider value={[todos, setTodos]}>
        {props.children}
    </DataContext.Provider>
  )
}
