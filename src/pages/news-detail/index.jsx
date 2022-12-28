/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { CheckboxHeart } from '../../components/UI/CheckboxHeart'
import { Paragraph } from '../../components/UI/typography/Paragraph'
import { Title } from '../../components/UI/typography/Title'
import { ShareLink } from '../../components/UI/news-card/ShareLink'
import initphoto from '../../assets/images/photo.png'
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'

const obj = {
   id: 168,
   tag: 'art',
   title: 'shrek',
   text: 'short_descshort_descshort_descshort_desc short_descshort_desc  vshort_descshort_descshort_descshort_descshort_desc',
   image: '/media/post_image/download_Vbz9r8E.jpeg',
   is_liked: true,
   short_desc:
      'short_descshort_descshort_descshort_descshort_descshort_descshort_descshort_desc',
}

export const NewsDetail = ({ content }) => {
   const navigate = useNavigate()
   const {
      image,
      is_liked: isLiked,
      id,
      title,
      short_desc: shortDescription,
   } = obj

   return (
      <NewsDetailContainer>
         <CardWrapper>
            <ArrowIconStyled onClick={() => navigate('/')} />
            <SubDescriptionContainer>
               <Flex justify="space-between" align="center">
                  <StyledNewsData>29.11.2022</StyledNewsData>
                  <CheckboxHeart checked={isLiked} id={toString(id)} />
               </Flex>
               <Flex direction="column" gap="24px">
                  <Title align="start" size="24px" weight="500px">
                     {title}
                  </Title>
                  <Paragraph>{shortDescription}</Paragraph>
                  <ImgContainer>
                     <img src={initphoto} alt={image} />
                  </ImgContainer>
                  <Paragraph>{shortDescription}</Paragraph>
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
