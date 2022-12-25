import React from 'react'
import styled from 'styled-components'
import { NewsCard } from '../../components/UI/news-card'
import media from '../../utils/helpers/media'

export const MainPage = () => {
   return (
      <Container>
         <MainPages>
            <NewsCard>news</NewsCard>
         </MainPages>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`
const MainPages = styled.div`
   width: 100%;
   display: grid;
   align-items: center;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   min-height: ${`${window.innerHeight}px`};
   text-align: center;
   ${media.tablet`
   padding-left:20px;
   padding-right:20px;
   text-align:center;
   `}
   ${media.mobile`
      
   `}
   & h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 39px;
      line-height: 38px;
      text-transform: uppercase;
      color: #ffffff;
      ${media.tablet`
       font-size:26px;
     `}
   }
`
