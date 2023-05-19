import React from 'react'
import {NavLink,Outlet} from "react-router-dom"


const Product = () => {
  return (<>
    <div>
      <input type = "search" placeholder='Search Product'></input>
      <div className='city'>
<NavLink to = "kkd">Kakinada</NavLink>
<NavLink to = "vsp">Vizag</NavLink>   


      </div>
      <Outlet/>

    </div></>
  )
}

export default Product
