import React, {useState, useContext} from 'react';
import { DataContext } from './DataProvider';

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('Cooking');

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('');
  }

  return (
    <form autoComplete='off' onSubmit={addTodo} className='flex mx-8'>
      <div className='flex space-x-4'>
        <input type="text" name="todos" id="todos" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" w-[50rem] mt-[4rem] mb-[1rem]' required placeholder="Descreva a tarefa aqui" value={todoName} 
        onChange={e => setTodoName(e.target.value.toLowerCase())}/>
        <button type="submit" className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#1B1D37] text-[#fff] mt-[4rem] mb-[1rem]'>Criar Tarefa</button>
      </div>
    </form>
  )
}
