/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCommentRequest, getNewsDetail } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { removeWithKeyFromSessionStorage } from '../../utils/helpers/general'
import media from '../../utils/helpers/media'
import { Title } from '../UI/typography/Title'
import { Comment } from './Comment'
import { CommentForm } from './CommentForm'

export const Comments = ({ comments, postId }) => {
   const dispatch = useDispatch()

   const leaveCommentHandler = (commentData) => {
      dispatch(addCommentRequest(commentData))
         .unwrap()
         .then(() => {
            removeWithKeyFromSessionStorage('_NEWS_DETAIL_KEY')
            dispatch(getNewsDetail(postId))
         })
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

   ${media.mobile`
      padding: 20px 5px 5px ;
      gap: 20px;
      width: 100%;
      h4 {
         text-align: start;
      }
  `}
   ${media.tablet`
      padding: 20px 5px 10px ;
      gap: 20px;
      width: 100%;
      h4 {
         text-align: start;
      }
  `}
`
