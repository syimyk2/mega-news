/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/mega-logo.svg'
import { signIn } from '../../store/authSlice'
import { KEY_AUTH } from '../../utils/constants/general'
import { saveToSessionStorage } from '../../utils/helpers/general'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { showSuccessMessage } from '../UI/notification/Notification'
import {
   InputWrapper,
   StyledForm,
   StyledLogo,
   Wrapper,
   InputsContainer,
   HelperText,
   StyledInput,
   NavigateBlock,
} from './SignUp'
import { LoginLoader } from './style'

export const SignIn = () => {
   const { error, isAuthorized, isLoading } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitted },
      reset,
   } = useForm({
      mode: 'onSubmit',
   })

   const signInHandler = (submittedData) => {
      dispatch(signIn({ submittedData, reset }))
   }

   useEffect(() => {
      if (isAuthorized) navigate('/')
   }, [isAuthorized, navigate])

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <LoginForm onSubmit={handleSubmit(signInHandler)}>
               <InputsContainer>
                  <InputWrapper>
                     <label htmlFor="nickName">Никнейм</label>
                     <StyledInput
                        name="nickName"
                        isValid={error || errors?.nickname?.message}
                        {...register('nickname', {
                           required: 'Напишите никнейм',
                        })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="password">Пароль</label>
                     <StyledInput
                        name="password"
                        type="password"
                        isValid={error || errors?.password?.message}
                        {...register('password', {
                           required: 'Напишите пароль',
                        })}
                     />
                  </InputWrapper>
                  <HelperText color="red">
                     {/* {error && 'Пароль или никнейм неправильно!'} */}
                  </HelperText>
               </InputsContainer>
               <Button type="submit" disabled={isLoading}>
                  {isLoading ? <LoginLoader /> : 'Войти'}
               </Button>
            </LoginForm>
            <NavigateBlock>
               <a href="/sign-up">Зарегистрироваться</a>
            </NavigateBlock>
         </Wrapper>
      </Card>
   )
}

const LoginForm = styled(StyledForm)`
   @media (max-width: 450px) {
      width: 100%;
      margin: 24px 48px 30px 41px;
      padding: 0px 24px;
   }
`
