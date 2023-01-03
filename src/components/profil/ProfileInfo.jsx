import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { ProfileForm } from './ProfilForm'

export const ProfileInfo = () => {
   return (
      <ProfileInfoConatainer>
         <ProfileForm />
      </ProfileInfoConatainer>
   )
}

const ProfileInfoConatainer = styled(Flex)`
   background: #80808011;
`
