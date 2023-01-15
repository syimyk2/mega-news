/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { CheckboxHeart } from '../../components/UI/CheckboxHeart'
import { Paragraph } from '../../components/UI/typography/Paragraph'
import { Title } from '../../components/UI/typography/Title'
import { ShareLink } from '../../components/UI/news-card/share-link/ShareLink'
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'
import { getNewsDetail, setLikeNews } from '../../store/newsSlice'
import Loader from '../../components/UI/loader'
import { Comments } from '../../components/comments'
import {
   getImageUrl,
   removeWithKeyFromSessionStorage,
} from '../../utils/helpers/general'
import { ShareLinkModal } from '../../components/UI/news-card/share-link'

export const NewsDetail = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { newsId } = useParams()
   const { newsDetail, isLoading } = useSelector((state) => state.news)
   const [isVisible, setVisible] = useState(false)

   const setLikeHandler = (postId) => {
      dispatch(setLikeNews({ post: postId }))
         .unwrap()
         .then(() => {
            removeWithKeyFromSessionStorage('_NEWS_DETAIL_KEY')
            dispatch(getNewsDetail(postId))
         })
   }

   useEffect(() => {
      removeWithKeyFromSessionStorage('_NEWS_DETAIL_KEY')
      dispatch(getNewsDetail(newsId))
   }, [newsId, useParams])

   return isLoading ? (
      <Loader />
   ) : (
      <NewsDetailContainer>
         <ShareLinkModal
            isVisible={isVisible}
            onClose={() => setVisible(false)}
            newsId={newsDetail?.id}
            title={newsDetail?.title}
            img={getImageUrl(newsDetail?.image)}
         />
         <CardWrapper>
            <ArrowIconStyled onClick={() => navigate(-1)} />
            <SubDescriptionContainer>
               <Flex justify="space-between" align="center">
                  <StyledNewsData>29.11.2022</StyledNewsData>
                  <CheckboxHeart
                     onChange={() => setLikeHandler(newsDetail?.id)}
                     checked={newsDetail?.is_liked}
                  />
               </Flex>
               <Flex direction="column" gap="24px">
                  <Title align="start" size="24px" weight="500px">
                     {newsDetail?.title}
                  </Title>
                  <Paragraph>{newsDetail?.short_desc}</Paragraph>
                  <ImgContainer>
                     <img
                        src={getImageUrl(newsDetail?.image)}
                        alt="news_detail_photo"
                     />
                  </ImgContainer>
                  <Paragraph>{newsDetail?.text}</Paragraph>
                  <ShareLink onClick={() => setVisible(true)} />
               </Flex>
            </SubDescriptionContainer>
            <Comments comments={newsDetail?.comment} postId={newsDetail?.id} />
         </CardWrapper>
      </NewsDetailContainer>
   )
}

const ArrowIconStyled = styled(ArrowLeftIcon)`
   cursor: pointer;
   width: 41px;
   height: 30px;

   :hover {
      path {
         stroke: #7e5bc2;
      }
   }
`

const NewsDetailContainer = styled.div`
   display: flex;
   align-items: flex-start;
   padding: 210px 150px 30px;
   gap: 100px;
   background: #8080802e;

   ${media.tablet`
   text-align:center;
   flex-direction: column;
   padding: 210px 0px 30px;
   `}

   ${media.mobile`
   gap: 0;
   flex-direction: column;
   padding: 210px 0px 30px;
   `}
   p,
   h1 {
      word-break: break-all;
   }
`

const CardWrapper = styled(Flex)`
   gap: 24px;
   padding: 16px 5px 16px;
   flex-direction: column;
   align-items: flex-start;
   margin: 0 auto;
   width: 100%;

   ${media.mobile`
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
  `}
`
const ImgContainer = styled.div`
   /* display: flex;
   align-items: center; */
   img {
      width: 845px;
      height: 555px;
      max-inline-size: 100%;
      block-size: auto;
      aspect-ratio: 2/1;
      object-fit: cover;
      object-position: top center;
   }

   ${media.mobile`
      img {
         height: 262px;
         width: 317px;
      }
       `}

   ${media.tablet`
      img {
          width: 645px;
         height: 355px;
      }
     
     `}
`
const SubDescriptionContainer = styled(Flex)`
   flex-direction: column;
   width: 100%;

   ${media.tablet`
      margin: 0 auto;
     `}
   ${media.mobile`
      padding: 0px 10px;
  `}
`
const StyledNewsData = styled.span`
   font-family: 'Ubuntu';
   font-weight: 400;
   font-size: 16px;
   color: #858080;
`
const StyledLink = styled.a`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 150%;
   text-decoration-line: underline;
   color: #7e5bc2;
   text-align: start;
`
