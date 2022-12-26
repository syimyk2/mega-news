/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { NewsList } from '../../components/news-list'
import { Filter } from '../../components/UI/filteration'
import { getNewsList } from '../../store/newsSlice'
import media from '../../utils/helpers/media'

export const MainPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getNewsList())
   }, [])

   return (
      <Container>
         <MainPages>
            <Filter />
            <NewsList />
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
   display: flex;
   gap: 100px;
   align-items: flex-start;
   padding: 220px 150px;
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
