import React from 'react'
import styled from 'styled-components'

export const Paragraph = (props) => {
   return <ParagraphStyled {...props}>{props.children}</ParagraphStyled>
}
const ParagraphStyled = styled.p`
   font-family: 'Ubuntu';
   font-weight: ${({ weight }) => weight || '400'};
   font-size: ${({ size }) => size || '16px'};
   text-align: ${({ align }) => align || 'start'};
   line-height: 150%;
   color: #858080;
`
