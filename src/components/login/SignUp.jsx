import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/mega-logo.svg'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'

export const SignUp = () => {
   const signUpHandler = () => {}
   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={signUpHandler}>
               <WrapperInputs>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="lastName">Фамилия</label>
                     <Input name="lastName" width="231px" />
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="name">Имя</label>
                     <Input name="name" width="231px" />
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="nickName">Никнейм</label>
                     <Input name="nickName" width="231px" />
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="password">Пароль</label>
                     <Input name="password" type="password" width="231px" />
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <label htmlFor="pass2">Подтверждение пароля</label>
                     <Input name="pass2" type="password" width="231px" />
                  </Flex>
               </WrapperInputs>
               <Button type="submit">Регистрация</Button>
            </StyledForm>
            <NavigateBlock>
               <p>Уже есть логин?</p>
               <a href="/">Войти</a>
            </NavigateBlock>
         </Wrapper>
      </Card>
   )
}

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 412px;
   margin: 31px 45px 15px 25px;
`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const WrapperInputs = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-bottom: 43px;
   div {
      margin-top: 20px;
   }
   label {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
   }
`
const StyledLogo = styled.img`
   width: 129px;
   height: 29px;
`
const NavigateBlock = styled.div`
   display: flex;
   gap: 3px;
   margin: 0 23px 0 0;
   p,
   a {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #5a5a5a;
   }
   a {
      color: #2d4ec2;
   }
`
