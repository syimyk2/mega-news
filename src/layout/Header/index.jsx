import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import { Flex } from '../../styles/styles-for-positions/style'
import { Title } from '../../components/UI/typography/Title'
import banner from '../../assets/images/banner.jpg'
import bannerMobile from '../../assets/images/banner-mobile.jpg'
import media from '../../utils/helpers/media'

export const Header = () => {
   const location = useLocation()
   const [isSwitched, setSwitched] = useState()

   if (location.pathname === '') {
      setSwitched(true)
   }

   return (
      <HeaderStyled
         banner={banner}
         bannerMobile={bannerMobile}
         isSwitched={isSwitched}
      >
         <Flex width="100%" justify="center" align="center" direction="column">
            <Div gap="83px" align="center" width="100%">
               <Nav isSwitched={isSwitched} />
            </Div>
            {!isSwitched && (
               <Flex margin="40px 0 22px">
                  <BannerText>Новости</BannerText>
               </Flex>
            )}
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 30px 150px;
   background-image: url(${({ isSwitched }) => !isSwitched && banner});
   background-size: cover;
   background-repeat: no-repeat;
   position: fixed;
   z-index: 3;
   ${media.tablet`
   padding: 30px 150px;
   `}
   ${media.mobile`
     padding: 18px 20px 17px;
     background-image: url(${({ isSwitched }) => !isSwitched && bannerMobile});

`}
`
const BannerText = styled(Title)`
   font-size: 72px;
   color: white;
   ${media.mobile`
    font-size: 42px;
    line-height: 48px;
   `}
`

const Div = styled(Flex)`
   ${media.tablet`
   justify-content: space-between;
   `}
`