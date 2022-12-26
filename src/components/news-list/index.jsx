/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import { Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { NewsCard } from '../UI/news-card'

export const NewsList = () => {
   const { newslist, isLoading, error } = useSelector((state) => state.news)
   return (
      <NewsListContainer>
         {!isLoading ? (
            newslist?.map((news) => (
               <>
                  <NewsCard key={news.id} id={news} content={news} />
                  <Divider />
               </>
            ))
         ) : (
            <h1>loading</h1>
         )}
      </NewsListContainer>
   )
}

const NewsListContainer = styled(Flex)`
   width: 100%;
   flex-direction: column;
`
