//Setting CSS Classes Dynamically
import React,{useState} from 'react'
import  './Minister.css'

const Minister = () => {

const [isValid,setIsValid] = useState(false);

const Kishu = 10;
const vennala = 20;

const Sandeep = "Guys Good Morning";
const Kishore = `${Sandeep} its time to play with "Javascript" please 'wakeup'  work and play with ${(Kishu * vennala)} %`;

  return (
    <div className="test">
      <h1 className={`inputclass ${!isValid?'error':''}`}>Hello Dynamic styling using class</h1>

    <div>{Sandeep}</div>
    <h1>{Kishore}</h1>
      
    </div>
  )
}

export default Minister
