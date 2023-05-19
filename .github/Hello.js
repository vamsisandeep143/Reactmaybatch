//Dynamic Syling

import React,{useState} from 'react'

export const Hello = () => {

  const [isActive,setIsActive] = useState(true);
  return (
    <div>
    <div style={{color:isActive?'red':'blue'}}>Hello</div>
    <button onClick = {() => {setIsActive(!isActive)}  }   >Change color</button>
    {isActive && <div>sandeep</div>}
    </div>
  )
}
