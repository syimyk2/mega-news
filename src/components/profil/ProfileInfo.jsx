import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { editUserData, getUserData } from '../../store/profileSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { ProfileForm } from './ProfilForm'

export const ProfileInfo = () => {
   const dispatch = useDispatch()
   const { userData } = useSelector((state) => state.profile)

   const submitChangeUserData = (editedData) => {
      dispatch(editUserData(editedData))
         .unwrap()
         .then(() => {
            dispatch(getUserData())
         })
   }

   useEffect(() => {
      dispatch(getUserData())
   }, [])

   return (
      <ProfileInfoConatainer>
         <ProfileForm profile={userData} onGetData={submitChangeUserData} />
      </ProfileInfoConatainer>
   )
}

const ProfileInfoConatainer = styled(Flex)`
   margin-bottom: 70px;
   width: 100%;

   ${media.mobile`
    margin-bottom: 40px;
   `}
`
