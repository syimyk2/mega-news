/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { NewsList } from '../../components/news-list'
import LoaderCard from '../../components/UI/loader/LoaderCard'
import { Title } from '../../components/UI/typography/Title'
import { getFavoriteNews, setLikeNews } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { removeWithKeyFromSessionStorage } from '../../utils/helpers/general'
import media from '../../utils/helpers/media'

export const FavoriteNews = () => {
   const dispatch = useDispatch()
   const { favoriteNews, isLoading, error } = useSelector((state) => state.news)

   const setLikeHandler = (postId) => {
      dispatch(setLikeNews({ post: postId }))
         .unwrap()
         .then(() => {
            removeWithKeyFromSessionStorage('_FAVORITE_NEWS_KEY')
            dispatch(getFavoriteNews())
         })
   }

   useEffect(() => {
      dispatch(getFavoriteNews())
   }, [])

   return (
      <FavoriteNewsContainer>
         <Title size="48px">Избранные новости</Title>
         {!isLoading ? (
            <NewsList
               newsList={favoriteNews}
               isLoading={isLoading}
               onLike={setLikeHandler}
               error={error}
            />
         ) : (
            <LoaderCard />
         )}
      </FavoriteNewsContainer>
   )
}

const FavoriteNewsContainer = styled(Flex)`
   flex-direction: column;
   margin: 0 auto;
   padding: 100px 150px;
   gap: 40px;

   ${media.tablet`
   padding: 100px 150px;
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
