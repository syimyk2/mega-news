import React from 'react'
import styled from 'styled-components'

export const Title = (props) => {
   return <TitleStyled {...props}>{props.children}</TitleStyled>
}
const TitleStyled = styled.h4`
   font-family: 'Ubuntu';
   font-weight: ${({ weight }) => weight || '500'};
   font-size: ${({ size }) => size || '16px'};
   text-align: ${({ align }) => align || ''};
   line-height: 30px;
   color: ${({ color }) => color || '#000000s'};
   text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
