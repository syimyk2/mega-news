import { Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PopUp } from '../../components/UI/popup/PopUp'
import { Title } from '../../components/UI/typography/Title'
import { Flex } from '../../styles/styles-for-positions/style'

export const HeadPopUp = ({ actions, onClose }) => {
   const navigate = useNavigate()

   const goToFavoritePosts = () => {
      navigate('/favorite-posts')
   }

   const goToProfileHandler = () => {
      navigate('/my-profile')
   }
   const logOutHandler = () => {
      // here must be logout logic or some dispatch
      alert('here must be logout logic or some dispatch')
   }
   return (
      <>
         <PopUp isVisible={actions.menu} onClose={onClose}>
            <PopTitle onClick={goToFavoritePosts}>Избранные новости</PopTitle>
         </PopUp>
         <PopUp isVisible={actions.profil} onClose={onClose}>
            <Flex gap="8px" direction="column">
               <PopTitle onClick={goToProfileHandler}>Мой профиль</PopTitle>
               <Divider />
               <PopTitle onClick={logOutHandler}>Выйти</PopTitle>
            </Flex>
         </PopUp>
      </>
   )
}

const PopTitle = styled(Title)`
   font-weight: 400px;
   cursor: pointer;
`
