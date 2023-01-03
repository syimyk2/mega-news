/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCommentRequest } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { Title } from '../UI/typography/Title'
import { Comment } from './Comment'
import { CommentForm } from './CommentForm'

export const Comments = ({ comments, postId }) => {
   const dispatch = useDispatch()

   const leaveCommentHandler = (commentData) => {
      dispatch(addCommentRequest(commentData))
   }

   return (
      <CommentsContainer>
         <Title size="24px">Комментарии</Title>
         {comments?.map((comment) => (
            <Comment comment={comment} key={comment.id} postId={postId} />
         ))}
         <CommentForm
            onSubmitComment={leaveCommentHandler}
            isParentForm
            postId={postId}
         />
      </CommentsContainer>
   )
}

const CommentsContainer = styled(Flex)`
   flex-direction: column;
   width: 90%;
   gap: 40px;
`
