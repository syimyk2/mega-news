import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'
import media from '../../../utils/helpers/media'
import { CheckboxHeart } from '../CheckboxHeart'
import { Paragraph } from '../typography/Paragraph'
import { Title } from '../typography/Title'
import { ShareLink } from './ShareLink'
import initphoto from '../../../assets/images/photo.png'

export const NewsCard = ({ content }) => {
   const {
      img,
      is_liked: isLiked,
      id,
      title,
      short_desc: shortDescription,
   } = content

   return (
      <CardWrapper>
         <ImgContainer>
            <img src={img || initphoto} alt={img} />
         </ImgContainer>
         <SubDescriptionContainer>
            <Flex justify="space-between" align="center">
               <StyledNewsData>29.11.2022</StyledNewsData>
               <CheckboxHeart checked={isLiked} id={toString(id)} />
            </Flex>
            <Title align="start" size="24px" weight="500px">
               {title}
            </Title>
            <Paragraph>{shortDescription}</Paragraph>
            <StyledLink href="/news-detail">Читать дальше&gt;&gt;</StyledLink>
            <ShareLink />
         </SubDescriptionContainer>
      </CardWrapper>
   )
}
const CardWrapper = styled(Flex)`
   gap: 40px;
   padding: 16px 0 16px;
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
      width: 255px;
      height: 211px;
      ${media.mobile`
      width: 317px;
      height: 262px;
       `}
   }
`
const SubDescriptionContainer = styled(Flex)`
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
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
