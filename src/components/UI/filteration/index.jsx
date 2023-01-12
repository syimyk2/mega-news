/* eslint-disable no-alert */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'
// import { FILTERING_DATA } from '../../../utils/constants/general'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Title } from '../typography/Title'

export const Filter = ({ tagList }) => {
   const [data, setData] = useState(null)
   const submitFilterHandler = () => {
      alert('filterating news mustbe here ')
   }
   const changeCheckbox = ({ target: { name, checked } }) => {
      if (checked) setData({ ...data, [name]: null })
      else setData({ ...data, [name]: '' })
   }
   return (
      <FilterWrapper className="filter">
         <Title width="700">Фильтрация</Title>
         <Options>
            {tagList?.map((filterOption) => (
               <Flex gap="10px" align="center" key={filterOption.id}>
                  <Checkbox
                     name="tag"
                     checked={data?.tag}
                     onChecked={() => changeCheckbox(filterOption.id)}
                  />
                  <label htmlFor="#">{filterOption.name}</label>
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
