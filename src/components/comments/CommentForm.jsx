import React, { useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import { Title } from '../UI/typography/Title'

export const CommentForm = ({
   onSubmitComment,
   isParentForm,
   postId,
   commentId,
}) => {
   const commentRef = useRef()

   const submitCommentHandler = (e) => {
      e.preventDefault()

      const commentData = {
         post: postId,
         text: commentRef.current.value,
      }
      const replayCommentData = {
         post: postId,
         text: commentRef.current.value,
         parent: commentId,
      }

      onSubmitComment(commentId ? replayCommentData : commentData)

      commentRef.current.value = ''
   }

   return (
      <CommentFormStyled onSubmit={submitCommentHandler}>
         {!isParentForm ? (
            <Flex width="50px">
               <Title width="100px">Вы</Title>
            </Flex>
         ) : null}

         <Input
            ref={commentRef}
            placeholder={isParentForm ? 'Напишите комментарий' : ''}
         />
         <Button>Ответить</Button>
      </CommentFormStyled>
   )
}

const CommentFormStyled = styled.form`
   display: flex;
   gap: 30px;
   width: 100%;
   align-items: center;
`
