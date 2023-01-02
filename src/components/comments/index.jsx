/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import { Title } from '../UI/typography/Title'
import { Comment } from './Comment'

export const Comments = ({ comments }) => {
   const commentRef = useRef()
   const dispatch = useDispatch()
   const answerToCommentHandler = () => {
      // dispatch(addCommentRequest)
   }
   return (
      <CommentsContainer>
         <Title size="24px">Комментарии</Title>
         {comments?.map((comment) => (
            <Comment comment={comment} key={comment.id} />
         ))}
         <CommentForm onSubmit={answerToCommentHandler}>
            <Input type="text" ref={commentRef} />
            <Button type="submit">Ответить</Button>
         </CommentForm>
      </CommentsContainer>
   )
}

const CommentsContainer = styled(Flex)`
   flex-direction: column;
   width: 60%;
   gap: 40px;
`

const CommentForm = styled.form`
   display: flex;
   gap: 30px;
`
