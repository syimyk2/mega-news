/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
   LinkedinIcon,
   LinkedinShareButton,
   EmailShareButton,
   FacebookShareButton,
   TelegramShareButton,
   WhatsappShareButton,
   WhatsappIcon,
   TelegramIcon,
   EmailIcon,
   FacebookIcon,
   OKShareButton,
   OKIcon,
} from 'react-share'
import styled from 'styled-components'
import { Flex } from '../../../../styles/styles-for-positions/style'
import Modal from '../../modal/Modal'

export const ShareLinkModal = ({
   isVisible,
   onClose,
   onGetData,
   title,
   newsId,
   img,
}) => {
   const host = window.location.origin
   const shareUrl = `${host}/news-detail/${newsId}`
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const [data, setData] = useState(null)

   const submitHandler = (e) => {
      e.preventDefault()
      onGetData({ data })
   }

   return (
      <Modal isVisible={isVisible} onClose={onClose} width="300px">
         <PublicForm onSubmit={submitHandler}>
            <Flex gap="8px">
               <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon round size="40px" />
               </LinkedinShareButton>
               <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  image={`${String(window.location)}/${img}`}
               >
                  <WhatsappIcon round size="40px" />
               </WhatsappShareButton>
               <TelegramShareButton url={shareUrl} title={title}>
                  <TelegramIcon round size="40px" />
               </TelegramShareButton>
               <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body="body"
                  image={`${String(window.location)}/${img}`}
               >
                  <EmailIcon round size="40px" />
               </EmailShareButton>
               <FacebookShareButton url={shareUrl} quote={title}>
                  <FacebookIcon round size="40px" />
               </FacebookShareButton>
               <OKShareButton url={shareUrl}>
                  <OKIcon size={32} round />
               </OKShareButton>
            </Flex>
         </PublicForm>
      </Modal>
   )
}

const PublicForm = styled.form`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 30px;
   padding: 20px 10px 20px;
`
