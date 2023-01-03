import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { StyledNewsData } from '../UI/news-card'
import { Paragraph } from '../UI/typography/Paragraph'
import { Title } from '../UI/typography/Title'

export const ChildComment = ({ child }) => {
   const { text, user, id } = child

   return (
      <CommentContainer key={id}>
         <Title>{`${user.name} ${user.last_name}`}</Title>
         <Paragraph>{text}</Paragraph>
         <Flex gap="30px">
            <StyledNewsData>30.11.22</StyledNewsData>
         </Flex>
      </CommentContainer>
   )
}

const CommentContainer = styled(Flex)`
   flex-direction: column;
   gap: 15px;
   margin-left: 50px;
`
