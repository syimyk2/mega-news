/* eslint-disable no-unused-vars */
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCommentRequest, getNewsDetail } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { StyledLink, StyledNewsData } from '../UI/news-card'
import { Paragraph } from '../UI/typography/Paragraph'
import { Title } from '../UI/typography/Title'
import { ChildComment } from './ChildComment'
import { CommentForm } from './CommentForm'
import { removeWithKeyFromSessionStorage } from '../../utils/helpers/general'

export const Comment = ({ comment, postId }) => {
   const dispatch = useDispatch()
   const [childCommentField, setCommentField] = useState(false)
   const isMobile = useMediaQuery({ query: `(max-width: 435px)` })
   const { text, user, id, child } = comment

   const replayToCommentHandler = (commentData) => {
      dispatch(addCommentRequest(commentData))
         .unwrap()
         .then(() => {
            removeWithKeyFromSessionStorage('_NEWS_DETAIL_KEY')
            dispatch(getNewsDetail(postId))
         })
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
            <ChildComment child={child} key={child.id} />
         ))}
         <Flex marginLeft={isMobile ? '20px' : '50px'}>
            {childCommentField ? (
               <CommentForm
                  onSubmitComment={replayToCommentHandler}
                  commentId={id}
                  postId={postId}
               />
            ) : null}
         </Flex>
      </CommentContainer>
   )
}

const CommentContainer = styled(Flex)`
   /* align-items: center; */
   flex-direction: column;
   gap: 15px;
`
