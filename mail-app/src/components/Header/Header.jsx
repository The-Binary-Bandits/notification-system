import React from 'react'
import logo from "./assets/BinaryBandits.png"

function Header() {
  return (
    <div className='flex justify-center items-center' >
      <img className='h-[8rem] mx-6' src={logo} alt="" />
      <h1 className='text-4xl font-semibold' >  The Binary Bandits</h1>  
    </div>
  )
}

export default Header