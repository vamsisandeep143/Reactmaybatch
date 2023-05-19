import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

const Kishore = () => {
  const [sandeep, setSandeep] = useState(null);
  useEffect(() => {


    fetchData()

  }, [])

  const fetchData = () => {
    fetch("https://graphqlzero.almansi.me/api", {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify({
        query: `{
          user(id: 1) {
            id
            name
          }
        }`
      })
    }).then(res => res.json()).then((res) => setSandeep(res?.data?.user?.name));

  }
  return (
    <Fragment>
      <h1>Hello {sandeep ? sandeep : ""}</h1>
    </Fragment>
  )
}

export default Kishore
