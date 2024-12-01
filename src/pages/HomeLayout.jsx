import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
    
    <nav>navbar</nav>
    <Outlet/>
    <footer>footer</footer>
     </div>
  )
}

export default HomeLayout