import React, { useRef } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import { Title } from '../UI/typography/Title'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg'
import media from '../../utils/helpers/media'

export const CommentForm = ({
   onSubmitComment,
   isParentForm,
   postId,
   commentId,
}) => {
   const commentRef = useRef()
   const isMobile = useMediaQuery({ query: `(max-width: 450px)` })

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
            <Flex width="80px">
               <Title width="100px">Вы</Title>
            </Flex>
         ) : null}

         <Input
            ref={commentRef}
            placeholder={isParentForm ? 'Напишите комментарий' : ''}
         />
         <StyledButton>{isMobile ? <ArrowUp /> : 'Ответить'}</StyledButton>
      </CommentFormStyled>
   )
}

const CommentFormStyled = styled.form`
   display: flex;
   gap: 30px;
   width: 100%;
   max-width: 600px;
   align-items: center;
`
const StyledButton = styled(Button)`
   ${media.mobile`
   padding: 6px 8px;
      
  `}
`
