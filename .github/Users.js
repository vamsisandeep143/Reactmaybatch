import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
   // const params = useParams();  // this hooks returns object with key value pairs of the dynamic parms from the current url
 //   const userid = params.id
    const {id} = useParams();


  return (

    
    <div>
        <h6>Display User details  {id}</h6>
      <h3>Sandeep</h3>
      <h3>Satti reddy</h3>
      <h3>Ram Sanvik</h3>
      <h3>kishore</h3>
    </div>
  )
}

export default Users
