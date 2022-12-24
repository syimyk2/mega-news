/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/mega-logo.svg'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'
import {
   InputWrapper,
   StyledForm,
   StyledLogo,
   Wrapper,
   InputsContainer,
} from './SignUp'

export const SignIn = () => {
   // const { error, isAuthorized, isLoading } = useSelector((state) => state.auth)
   // const navigate = useNavigate()
   // const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      // formState: { errors, isValid, isSubmitted, messages},
      reset,
   } = useForm({
      mode: 'onsubmit',
   })

   const signInHandler = (e) => {
      e.prevantDefault()
   }

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={signInHandler}>
               <InputsContainer>
                  <InputWrapper>
                     <label htmlFor="nickName">Никнейм</label>
                     <Input name="nickName" width="231px" />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="password">Пароль</label>
                     <Input name="password" type="password" width="231px" />
                  </InputWrapper>
               </InputsContainer>
               <Button type="submit">Войти</Button>
            </StyledForm>
         </Wrapper>
      </Card>
   )
}
