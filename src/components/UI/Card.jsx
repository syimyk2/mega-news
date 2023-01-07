import React from 'react'
import styled from 'styled-components'

export const Card = (props) => {
   return <StyledCard {...props}>{props.children}</StyledCard>
}

const StyledCard = styled.div`
   background: #ffffff;
   box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.14);
   border-radius: 15px;
   padding: 19px;
   width: 100%;
`
