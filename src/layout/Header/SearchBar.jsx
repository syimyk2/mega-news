import React from 'react'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input'

export const SearchBar = ({ actions }) => {
   const onChangeSearchHandler = () => {
      console.log('searching..,')
   }

   return (
      <SearchBarStyled>
         <SearchInput
            actions={actions.search}
            type="search"
            onChange={onChangeSearchHandler}
            placeholder="Что ищете"
         />
      </SearchBarStyled>
   )
}

const SearchBarStyled = styled.form`
   display: flex;
`

const SearchInput = styled(Input)`
   border: 1px transparent;
   background: ${({ actions }) => (actions ? '#ffffff14' : 'transparent')};
   width: ${({ actions }) => (actions ? '260px' : '0px')};
   border-radius: 0;
   /* border-bottom: 1px solid #ffffffb0; */
   &:hover {
   }
   &:focus {
      border: none;
      border-bottom: 1px solid #ffffffb0;
   }
   ::placeholder,
   ::-webkit-input-placeholder {
      color: #a6a3a3;
   }
`
