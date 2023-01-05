import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { editUserData, getUserData } from '../../store/authSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { ProfileForm } from './ProfilForm'

export const ProfileInfo = () => {
   const dispatch = useDispatch()
   const { user } = useSelector((state) => state.auth)

   const submitChangeUserData = (editedData) => {
      console.log(editedData)
      const formData = new FormData()
      formData.append('profile_image', editedData.data.file)

      const newUserData = {
         profile_image: formData,
         name: editedData.data.name,
         last_name: editedData.data.last_name,
         nickname: editedData.data.nickname,
      }

      dispatch(editUserData(newUserData))
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
         <ProfileForm profile={user} onGetData={submitChangeUserData} />
      </ProfileInfoConatainer>
   )
}

const ProfileInfoConatainer = styled(Flex)`
   margin-bottom: 70px;
   width: 100%;
`
