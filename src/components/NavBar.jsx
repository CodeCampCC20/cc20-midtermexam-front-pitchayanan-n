import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className='bg-gray-200 h-15 flex items-center gap-6'>
      <NavLink className={"cursor-pointer hover:underline"} to={'/'}>Home</NavLink>
      <NavLink className={"cursor-pointer hover:underline"} to={'/login'}>Login</NavLink>
      <NavLink className={"cursor-pointer hover:underline"} to={'/todo'}>To do</NavLink>
    </nav>
  )
}

export default NavBar