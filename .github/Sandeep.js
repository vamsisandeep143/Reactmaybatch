import React from 'react'
import Styled from 'styled-components'
// import './Sandeep.css';
import Styles from './Sandeep.module.css'

const Sandeep = () => {

const Styleddiv = Styled.div`
 
color: green;






`;

const Styledh1 = Styled.h1`

background-color:yellow;
`;
  
  return (
    <div>
      <div className={Styles.test}>Good Morning Everyone</div>
      <Styleddiv>sandeep</Styleddiv>
      <Styledh1>Sabffffffff</Styledh1>
    </div>
  )
}

export default Sandeep
