/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { CheckboxHeart } from '../../components/UI/CheckboxHeart'
import { Paragraph } from '../../components/UI/typography/Paragraph'
import { Title } from '../../components/UI/typography/Title'
import { ShareLink } from '../../components/UI/news-card/ShareLink'
import initphoto from '../../assets/images/photo.png'

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
   const {
      image,
      is_liked: isLiked,
      id,
      title,
      short_desc: shortDescription,
   } = obj

   return (
      <CardWrapper>
         <SubDescriptionContainer>
            <Flex justify="space-between" align="center">
               <StyledNewsData>29.11.2022</StyledNewsData>
               <CheckboxHeart checked={isLiked} id={toString(id)} />
            </Flex>
            <Title align="start" size="24px" weight="500px">
               {title}
            </Title>
            <Paragraph>{shortDescription}</Paragraph>
            <ImgContainer>
               <img src={initphoto} alt={image} />
            </ImgContainer>
            <Paragraph>{shortDescription}</Paragraph>
            <StyledLink href="/news-detail">Читать дальше&gt;&gt;</StyledLink>
            <ShareLink />
         </SubDescriptionContainer>
      </CardWrapper>
   )
}
const CardWrapper = styled(Flex)`
   gap: 24px;
   padding: 16px 0 16px;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   ${media.mobile`
      flex-direction: column;
      gap: 0;
      padding: 21px 0 21px;
      align-items: center;
  `}
`
const ImgContainer = styled.div`
   display: flex;
   align-items: center;
   img {
      width: 845px;
      height: 555px;
      ${media.mobile`
      width: 317px;
      height: 262px;
       `}
      ${media.tablet`
      width: 555px;
      height: 355px;
     `}
   }
`
const SubDescriptionContainer = styled(Flex)`
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   gap: 24px;
   ${media.mobile`
     width: 320px;
     gap: 8px;
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
