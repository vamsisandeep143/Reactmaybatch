import React from 'react'
import Image2 from './Asserts/v-1.jpg'
import { NavLink, Outlet } from 'react-router-dom'

const Vizag = () => {
  return (
    <div>
      <h1>Final destination</h1>
      <img src = {Image2} alt = "kkd" ></img>


      <NavLink to = "rushikonda">Rushikonda</NavLink>
<NavLink to = "ark">Aruku</NavLink> 

<Outlet></Outlet>
    </div>
  )
}

export default Vizag
