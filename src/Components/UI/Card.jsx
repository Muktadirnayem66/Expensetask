import React from 'react'
import styled from 'styled-components'

const Card = (props ) => {

  return (
    <CardDesign>
    {props.children}
    </CardDesign>
  )
}

export default Card

const CardDesign = styled.div`
background:black;
border-radius: 10px;

`