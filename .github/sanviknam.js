import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Test} from './Test'

const Sanviknam = () => {
  const [searchParams,setSearchParams] = useSearchParams();

  console.log(searchParams);
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
   <button onClick={() => setSearchParams({filter:'active'})}>online Active users</button><br></br>
      <button onClick={() => setSearchParams({})}>offline passive users</button>
    
    {
      showActiveUsers?(<h1>Hello online people</h1>):(<h1>Come to online fasr</h1>)

    }
    {<Test name= "sandeep" age = "33"></Test>}
    </div>
  )
}


export default Sanviknam

