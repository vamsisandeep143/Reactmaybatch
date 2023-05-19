import React from 'react'
import { useParams } from 'react-router-dom';

const Userdetails = () => {
    const params = useParams();  // this hooks returns object with key value pairs of the dynamic parms from the current url
    const userid = params.id
  return (
    <div>
       <h6>Display User details  {userid}</h6>
    </div>
  )
}

export default Userdetails
