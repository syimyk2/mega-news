/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Paragraph } from '../UI/typography/Paragraph'
import { Title } from '../UI/typography/Title'

export const Comment = ({ comment }) => {
   //    const {} = comment
   return (
      <CommentContainer>
         <Title>Oleg Petrov</Title>
         <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
         </Paragraph>
         <Flex>
            <span>30.11.22</span>
            <span>Ответить</span>
         </Flex>
      </CommentContainer>
   )
}

const CommentContainer = styled(Flex)`
   align-items: center;
`
