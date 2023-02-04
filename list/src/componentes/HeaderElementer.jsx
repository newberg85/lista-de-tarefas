import React from 'react'
import Logo from './assets/logo.png'

export default function HeaderElementer() {
  return (
    <div className='shadow-md w-full  top-0 left-o'>
      <div className='md:flex bg-[#fff] py-4 p-[2.5rem]'>
        <img src={Logo} alt=''/>
        <div className='border-l-[2px] border-[#1B1D37]'>
          <h1>TO DO LIST</h1>
          <p>Teste de capacidade técnica</p>
        </div>
      </div>
    </div>
  )
}
