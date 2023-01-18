/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'
import {
   changeCheckbox,
   getDataFromSessionStorage,
} from '../../../utils/helpers/general'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Title } from '../typography/Title'

export const Filter = ({ tagList, onSubmitFilter }) => {
   const [filter, setFilter] = useState(
      getDataFromSessionStorage('filter') || {}
   )

   const submitFilterHandler = () => {
      const tagData = Object.keys(filter).join(',')
      onSubmitFilter({ tagData, search: null })
   }

   return (
      <FilterWrapper className="filter">
         <Title width="700">Фильтрация</Title>
         <Options>
            {tagList?.map((filterOption) => (
               <Flex gap="10px" align="center" key={filterOption?.id}>
                  <Checkbox
                     name={filterOption?.name}
                     onChange={(e) => changeCheckbox(e, filter, setFilter)}
                  />
                  <label htmlFor="#">{filterOption?.name}</label>
               </Flex>
            ))}
         </Options>
         <Button onClick={submitFilterHandler}>Применить</Button>
      </FilterWrapper>
   )
}

const FilterWrapper = styled(Flex)`
   flex-direction: column;
   padding: 20px 27px 27px;
   width: fit-content;
   gap: 8px;
   position: sticky;
   top: 210px;

   background: #ffffff;
   box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
   border-radius: 10px;

   label {
      font-family: 'Ubuntu';
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;

      color: #000000;
   }
`
const Options = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0;
`
