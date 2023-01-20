/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '../../../styles/styles-for-positions/style'
import media from '../../../utils/helpers/media'
import { CheckboxHeart } from '../CheckboxHeart'
import { Paragraph } from '../typography/Paragraph'
import { Title } from '../typography/Title'
import { ShareLink } from './share-link/ShareLink'
import { getImageUrl } from '../../../utils/helpers/general'
import { ReactComponent as Trash } from '../../../assets/icons/trash-2.svg'
import { ShareLinkModal } from './share-link'

export const NewsCard = ({ content, isMyPublics, onDelete, onLike }) => {
   const [isVisible, setVisible] = useState(false)
   const {
      image,
      is_liked: isLiked,
      id,
      title,
      short_desc: shortDescription,
   } = content

   const shareLinkSubmit = () => {
      // must send generated link here
   }
   const closeShareModal = () => {
      setVisible(false)
   }

   return (
      <CardWrapper>
         <ShareLinkModal
            isVisible={isVisible}
            onClose={closeShareModal}
            onGetData={shareLinkSubmit}
            newsId={id}
            title={title}
            img={getImageUrl(image)}
         />
         <ImgContainer>
            <img src={getImageUrl(image)} alt="news_photo" />
         </ImgContainer>
         <SubDescriptionContainer>
            <Flex justify="space-between" align="center">
               <StyledNewsData>29.11.2022</StyledNewsData>
               {isMyPublics ? (
                  <StyledTrash onClick={() => onDelete(id)} />
               ) : (
                  <CheckboxHeart
                     onChange={() => onLike(id)}
                     checked={isLiked}
                  />
               )}
            </Flex>
            <Title align="start" size="24px" weight="500px">
               {title}
            </Title>
            <Paragraph>{shortDescription}</Paragraph>
            <StyledLink to={`/news-detail/${id}`}>
               Читать дальше&gt;&gt;
            </StyledLink>
            <ShareLink onClick={() => setVisible(true)} />
         </SubDescriptionContainer>
      </CardWrapper>
   )
}

export const StyledTrash = styled(Trash)`
   cursor: pointer;
   width: 25px;
   height: 25px;
`
const CardWrapper = styled(Flex)`
   gap: 40px;
   padding: 16px 0 16px;
   width: 100%;
   min-width: 750px;
   max-width: 800px;
   margin: 0;

   ${media.mobile`
      flex-direction: column;
      padding: 21px 0 21px;
      align-items: center;
      gap: 0;
  `}
`
const ImgContainer = styled.div`
   /* display: flex; */
   img {
      width: 255px;
      height: 211px;
      aspect-ratio: 2/1;
      object-fit: cover;
      object-position: top center;

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
export const StyledNewsData = styled.span`
   font-family: 'Ubuntu';
   font-weight: 400;
   font-size: 16px;
   color: #858080;
`
export const StyledLink = styled(Link)`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 150%;
   text-decoration-line: underline;
   color: #7e5bc2;
   text-align: start;
`
