import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {
   return <StyledButton {...props}>{props.children}</StyledButton>
}
const StyledButton = styled.button`
   background: #7e5bc2;
   border-radius: 10px;
   /* width: 100%; */
   display: flex;
   justify-content: center;
   padding: 6px 49px;
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: #ffffff;
   border: none;
   outline: none;
   cursor: pointer;
   :hover {
      opacity: 0.9;
   }
   :active {
      background: #8f74c3;
   }
   :disabled {
      cursor: not-allowed;
      background: #c0abeacf;
      box-shadow: none;
      border-color: #c4c4c4;
      color: #ffffff;
      border: 2px solid #c4c4c4;
      outline: none;
      :before {
         content: '';
         position: absolute;
         z-index: -1;
         background: none;
         height: 200px;
         width: 220px;
         border-radius: 50%;
      }
   }
`
