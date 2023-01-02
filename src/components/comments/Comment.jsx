/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { StyledLink, StyledNewsData } from '../UI/news-card'
import { Paragraph } from '../UI/typography/Paragraph'
import { Title } from '../UI/typography/Title'
import { CommentForm } from './CommentForm'

export const Comment = ({ comment }) => {
   const [commentField, setCommentField] = useState(true)
   const { text, user, id, child } = comment
   console.log(comment)

   const showAnswerToComment = () => {}

   const commentHandler = (comments) => {
      console.log(comments)
   }
   return (
      <CommentContainer>
         <Title>{`${user.name} ${user.last_name}`}</Title>
         <Paragraph>{text}</Paragraph>
         <Flex gap="30px">
            <StyledNewsData>30.11.22</StyledNewsData>
            <StyledLink onClick={() => showAnswerToComment()}>
               Ответить
            </StyledLink>
         </Flex>
         <CommentForm onSubmitComment={commentHandler} />
      </CommentContainer>
   )
}

const CommentContainer = styled(Flex)`
   /* align-items: center; */
   flex-direction: column;
   gap: 15px;
`
