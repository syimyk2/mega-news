import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input'

export const SearchBar = ({ actions }) => {
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const onChangeSearchHandler = () => {
      console.log('searching..,', isMobile)
   }

   return (
      <SearchBarStyled>
         <SearchInput
            actions={actions.search}
            type="search"
            onChange={onChangeSearchHandler}
            placeholder="Поиск мега новестей"
            disabled={!actions.search}
            width={isMobile ? '150px' : '260px'}
         />
      </SearchBarStyled>
   )
}

const SearchBarStyled = styled.form`
   display: flex;
`

const SearchInput = styled(Input)`
   border: 1px transparent;
   background: ${({ actions }) => (actions ? '#fffffff' : 'transparent')};
   border-radius: 8px;
   transition: all 0.1s ease;

   :hover {
   }
   :focus {
      border: none;
   }
   ::placeholder,
   ::-webkit-input-placeholder {
      color: #a6a3a3;
   }
   :disabled,
   :disabled:focus,
   :disabled:active,
   :disabled:hover {
      opacity: 0;
      cursor: default;
      border: none;
   }
`
