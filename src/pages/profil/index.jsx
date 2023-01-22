import React from 'react'
import styled from 'styled-components'
import { MyPosts } from '../../components/profil/MyPosts'
import { ProfileInfo } from '../../components/profil/ProfileInfo'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'

export const Profile = () => {
   return (
      <ProfilContainer>
         <ProfileInfo />
         <MyPosts />
      </ProfilContainer>
   )
}

const ProfilContainer = styled(Flex)`
   flex-direction: column;
   margin: 0 auto;
   padding: 210px 100px;
   gap: 40px;

   ${media.tablet`
   padding: 100px 10px;
   gap: 20px;

   h4 {
      font-size: 30px;
   }

   `}

   ${media.mobile`
     padding: 100px 5px;
     gap: 20px;

     h4 {
      font-size: 30px;
     }

   `}
`
