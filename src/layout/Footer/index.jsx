import React from 'react'
import styled from 'styled-components'
import { LogoMega } from '../../components/UI/logo/LogoMega'
import { Title } from '../../components/UI/typography/Title'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'

export const Footer = () => {
   return (
      <FooterStyled>
         <Flex align="center" direction="column" gap="40px" justify="center">
            <Content>
               <LogoMega />
            </Content>
            <List>
               <Li>
                  <a href="/">
                     <Title weight="300px">Мой профиль</Title>
                  </a>
               </Li>
               <Li>
                  <a href="/">
                     <Title weight="300px">Избранные новости</Title>
                  </a>
               </Li>
            </List>
         </Flex>
      </FooterStyled>
   )
}
const FooterStyled = styled.footer`
   width: 100%;
   background: #151515;
   padding: 34px 0px 65px;
   ${media.tablet`
   padding: 34px 0px 65px;

   `}
`
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 26px;
   a {
      color: white;
      text-decoration: none;
   }
   ${media.mobile`
   `}
`
const Li = styled.li``

const Content = styled.div`
   @media (max-width: 600px) {
      transform: translate(0px);
   }
`
