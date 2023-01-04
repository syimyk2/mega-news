/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { NewsCard } from '../UI/news-card'
import { Title } from '../UI/typography/Title'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import media from '../../utils/helpers/media'
import { PopUp } from '../UI/popup/PopUp'
import Modal from '../UI/modal/Modal'
import { AddPublicForm } from './AddPublicForm'

export const MyPosts = () => {
   const { newslist } = useSelector((state) => state.news)
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const [isShowModal, setShowModal] = useState(false)
   const dispatch = useDispatch()

   const showAddPublcHandler = () => {
      setShowModal(true)
   }

   //    useEffect(() => {
   //       dispatch(getMyPublicsRequest(param))
   //    }, [])

   return (
      <Flex direction="column" gap="40px">
         <AddPublicForm
            isVisible={isShowModal}
            onClose={() => setShowModal(false)}
         />
         <HeaderPublicWrapper>
            <Title size="45px">Мои публикации</Title>
            <StyledBtn onClick={showAddPublcHandler}>
               {isMobile ? <PlusIcon /> : 'Новая публикация'}
            </StyledBtn>
         </HeaderPublicWrapper>
         <Flex direction="column">
            {newslist.map((publicc) => (
               <NewsCard key={publicc.id} content={publicc} isMyPublics />
            ))}
         </Flex>
      </Flex>
   )
}

const HeaderPublicWrapper = styled(Flex)`
   width: 100%;
   justify-content: space-between;
   align-items: center;
`
const StyledBtn = styled(Button)`
   ${media.mobile`
      padding: 7px 15px;
  `}
`
