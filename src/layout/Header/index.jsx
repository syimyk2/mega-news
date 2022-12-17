import React from 'react'
import styled from 'styled-components'
import { Nav } from './Nav'
import { Flex } from '../../styles/styles-for-positions/style'
import { Title } from '../../components/UI/typography/Title'
import media from '../../utils/helpers/media'

export const Header = () => {
   return (
      <HeaderStyled>
         <Flex width="100%" justify="center" align="center" direction="column">
            <Div gap="83px" align="center" width="100%">
               <Nav />
            </Div>
            <Flex margin="40px 0 22px">
               <BannerText>Новости</BannerText>
            </Flex>
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 30px 150px;
   background-image: linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.76),
         rgba(0, 0, 0, 0.76)
      ),
      url('/../assets/images/banner.png');
   background-size: cover;
   background-repeat: no-repeat;
   position: fixed;
   z-index: 3;
   ${media.tablet`
   padding: 30px 150px;
   `}
   ${media.mobile`
     padding: 18px 20px 17px;
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
