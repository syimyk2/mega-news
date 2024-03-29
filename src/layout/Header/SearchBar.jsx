/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input'
import media from '../../utils/helpers/media'

export const SearchBar = ({ actions, onChange, filter }) => {
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const [params, setParams] = useSearchParams()

   const timer = useRef()

   const changeHandler = useCallback(
      (e) => {
         if (timer.current) {
            clearTimeout(timer.current)
         }
         timer.current = setTimeout(() => {
            onChange(e)
         }, 1000)
      },
      [filter]
   )

   useEffect(() => {
      if (filter.search) {
         setParams({ search: filter?.search })
      } else {
         setParams('')
      }
   }, [filter, setParams])

   return (
      <SearchBarStyled>
         <SearchInput
            name="search"
            type="search"
            placeholder="Поиск мега новостей..."
            defaultValue={filter?.search || ''}
            onChange={changeHandler}
            actions={actions.search}
            disabled={!actions.search}
            width={isMobile ? '120px' : '260px'}
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
   width: 260px;

   ${media.tablet`
   width: 150px;

   `}

   ${media.mobile`
   width: 100px;
    padding: 2px 5px;
    height: 25px;
    font-size: 11px
   `}

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
