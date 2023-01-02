import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import { Title } from '../UI/typography/Title'

export const CommentForm = ({ onSubmitComment }) => {
   const [comment, setComment] = useState('')

   return (
      <CommentFormStyled onSubmit={onSubmitComment(comment)}>
         <Flex width="50px">
            <Title width="100px">Вы</Title>
         </Flex>
         <Input onChange={(e) => setComment(e.target.value)} />
         <Button>Ответить</Button>
      </CommentFormStyled>
   )
}

const CommentFormStyled = styled.form`
   display: flex;
   gap: 20px;
   width: 100%;
   align-items: center;
`
