import React from 'react'
import styled from 'styled-components'
import { NewsList } from '../../components/news-list'
import { Title } from '../../components/UI/typography/Title'
import { Flex } from '../../styles/styles-for-positions/style'

export const FavoriteNews = () => {
   return (
      <FavoriteNewsContainer>
         <Title size="48px">Избранные новости</Title>
         <NewsList />
      </FavoriteNewsContainer>
   )
}

const FavoriteNewsContainer = styled(Flex)`
   flex-direction: column;
`
