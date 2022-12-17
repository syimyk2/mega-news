import React from 'react'
import logo from '../../assets/images/mega-logo.svg'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'
import { StyledForm, StyledLogo, Wrapper, WrapperInputs } from './SignUp'

export const SignIn = () => {
   const signInHandler = () => {}
   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={signInHandler}>
               <WrapperInputs>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="nickName">Никнейм</label>
                     <Input name="nickName" width="231px" />
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="password">Пароль</label>
                     <Input name="password" type="password" width="231px" />
                  </Flex>
               </WrapperInputs>
               <Button type="submit">Войти</Button>
            </StyledForm>
         </Wrapper>
      </Card>
   )
}
