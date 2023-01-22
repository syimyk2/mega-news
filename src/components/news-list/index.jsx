/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { NewsCard } from '../UI/news-card'

export const NewsList = ({ newsList, isLoading, error, onLike }) => {
   return (
      <NewsListContainer>
         {newsList?.map((news) => (
            <OuterCardWrapper key={news.id}>
               <NewsCard id={news} content={news} onLike={onLike} />
               <Divider />
            </OuterCardWrapper>
         ))}
      </NewsListContainer>
   )
}

const NewsListContainer = styled(Flex)`
   width: 100%;
   flex-direction: column;
`
const OuterCardWrapper = styled(Flex)`
   width: 100%;
`
