import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'

export const NewsDetail = () => {
   return (
      <NewsDetailContainer>
         <Flex>bakc and heart</Flex>
         title
         <Flex>paragraph</Flex>
         <img src="" alt="" />
         paragraph
         <Flex>coments</Flex>
      </NewsDetailContainer>
   )
}

const NewsDetailContainer = styled(Flex)`
   margin: 30px 150px 30px;
`
