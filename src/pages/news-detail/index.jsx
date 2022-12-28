/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { CheckboxHeart } from '../../components/UI/CheckboxHeart'
import { Paragraph } from '../../components/UI/typography/Paragraph'
import { Title } from '../../components/UI/typography/Title'
import { ShareLink } from '../../components/UI/news-card/ShareLink'
import initphoto from '../../assets/images/photo.png'
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'
import { getNewsDetail } from '../../store/newsSlice'
import Loader from '../../components/UI/loader'

const obj = {
   id: 168,
   tag: 'art',
   title: 'shrek',
   text: 'short_descshort_descshort_descshort_desc short_descshort_desc  vshort_descshort_descshort_descshort_descshort_desc',
   img: '/media/post_image/download_Vbz9r8E.jpeg',
   is_liked: true,
   short_desc:
      'short_descshort_descshort_descshort_descshort_descshort_descshort_descshort_desc',
}

export const NewsDetail = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { newsDetail, isLoading } = useSelector((state) => state.news)

   const { newsId } = useParams()

   // const {
   //    image,
   //    is_liked: isLiked,
   //    id,
   //    title,
   //    short_desc: shortDescription,
   // } = content

   useEffect(() => {
      dispatch(getNewsDetail(newsId))
   }, [])
   console.log(isLoading, '/', newsDetail)

   return isLoading ? (
      <Loader />
   ) : (
      <NewsDetailContainer>
         <CardWrapper>
            <ArrowIconStyled onClick={() => navigate('/')} />
            <SubDescriptionContainer>
               <Flex justify="space-between" align="center">
                  <StyledNewsData>29.11.2022</StyledNewsData>
                  <CheckboxHeart
                     checked={newsDetail?.is_liked}
                     id={toString(newsDetail?.id)}
                  />
               </Flex>
               <Flex direction="column" gap="24px">
                  <Title align="start" size="24px" weight="500px">
                     {newsDetail?.title}
                  </Title>
                  <Paragraph>{newsDetail?.short_desc}</Paragraph>
                  <ImgContainer>
                     <img
                        src={newsDetail?.image || initphoto}
                        alt="news_photo"
                     />
                  </ImgContainer>
                  <Paragraph>{newsDetail?.text}</Paragraph>
                  <StyledLink href="/news-detail">
                     Читать дальше&gt;&gt;
                  </StyledLink>
                  <ShareLink />
               </Flex>
            </SubDescriptionContainer>
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
   h1,
   h4 {
      word-break: break-all;
   }
`

const CardWrapper = styled(Flex)`
   gap: 24px;
   padding: 16px 0 16px;
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
   display: flex;
   align-items: center;
   img {
      width: 845px;
      height: 555px;

      ${media.mobile`
      height: 262px;
      width: 317px;
       `}

      ${media.tablet`
      width: 645px;
      height: 355px;
      margin: 0 auto;
     `}
   }
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
