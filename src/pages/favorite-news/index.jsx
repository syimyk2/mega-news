/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { NewsList } from '../../components/news-list'
import { Title } from '../../components/UI/typography/Title'
import { getFavoriteNews } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'

export const FavoriteNews = () => {
   const dispatch = useDispatch()
   const { favoriteNews, isLoading, error } = useSelector((state) => state.news)

   useEffect(() => {
      dispatch(getFavoriteNews())
   }, [])

   return (
      <FavoriteNewsContainer>
         <Title size="48px">Избранные новости</Title>
         <NewsList
            newsList={favoriteNews}
            isLoading={isLoading}
            error={error}
         />
      </FavoriteNewsContainer>
   )
}

const FavoriteNewsContainer = styled(Flex)`
   flex-direction: column;
   margin: 0 auto;
   padding: 150px 150px;
   gap: 40px;
   ${media.tablet`
   padding: 150px 150px;
   gap: 20px;
   h4 {
      font-size: 30px;
   }
   `}
   ${media.mobile`
     padding: 150px 5px;
     gap: 20px;
     h4 {
      font-size: 30px;
     }

   `}
`
