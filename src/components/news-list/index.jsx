/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { NewsCard } from '../UI/news-card'

export const NewsList = ({ newsList, isLoading, error }) => {
   return (
      <NewsListContainer>
         {!isLoading ? (
            newsList?.map((news) => (
               <div key={news.id}>
                  <NewsCard id={news} content={news} />
                  <Divider />
               </div>
            ))
         ) : (
            <h1>loading...</h1>
         )}
      </NewsListContainer>
   )
}

const NewsListContainer = styled(Flex)`
   width: 100%;
   flex-direction: column;
`
