import React from 'react'
import Sandeep from './Sandeep';
import Sanvik from './Sanvik';
import {useNavigate,NavLink,Outlet} from "react-router-dom";

const Testing = () => {

    const navigate = useNavigate();
    
  return (
    <div>
       <button onClick={()=>navigate("/Sanvik")}>click</button>
       <NavLink to = "profile">Profile</NavLink>
      < Outlet></Outlet>
    </div>
  )
}

export default Testing

