/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCommentRequest } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { StyledLink, StyledNewsData } from '../UI/news-card'
import { Paragraph } from '../UI/typography/Paragraph'
import { Title } from '../UI/typography/Title'
import { ChildComment } from './ChildComment'
import { CommentForm } from './CommentForm'

export const Comment = ({ comment, postId }) => {
   const dispatch = useDispatch()
   const [childCommentField, setCommentField] = useState(false)
   const { text, user, id, child } = comment

   const replayToCommentHandler = (commentData) => {
      dispatch(addCommentRequest(commentData))
   }

   return (
      <CommentContainer>
         <Title>{`${user.name} ${user.last_name}`}</Title>
         <Paragraph>{text}</Paragraph>
         <Flex gap="30px">
            <StyledNewsData>30.11.22</StyledNewsData>
            <StyledLink onClick={() => setCommentField(true)}>
               Ответить
            </StyledLink>
         </Flex>
         {child?.map((child) => (
            <ChildComment child={child} />
         ))}
         {childCommentField ? (
            <CommentForm
               onSubmitComment={replayToCommentHandler}
               commentId={id}
               postId={postId}
            />
         ) : null}
      </CommentContainer>
   )
}

const CommentContainer = styled(Flex)`
   /* align-items: center; */
   flex-direction: column;
   gap: 15px;
`
