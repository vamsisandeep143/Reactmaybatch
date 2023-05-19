import React from 'react'
import { NavLink } from 'react-router-dom'
import Image1 from './Asserts/k-1.jpg'
import Styled from 'styled-components'
const Kakinada = () => {

  const StyledImg = Styled.img`
  object-fit:cover;
  width : 20rem;
  height:25rem;

  
  
  
  `
  const Styleddiv = Styled.div`
  
  display:flex;
  flex-direction:row;
  justify-content:space-between;

  `
  return (
    <>
    <h5>Co canada</h5>
    <Styleddiv>
      
      <StyledImg src = {Image1} alt = "kkd" ></StyledImg>
      <StyledImg src = {Image1} alt = "kkd" ></StyledImg>
      <StyledImg src = {Image1} alt = "kkd" ></StyledImg>

      
    </Styleddiv>
    
    
    </>
  )
}

export default Kakinada
