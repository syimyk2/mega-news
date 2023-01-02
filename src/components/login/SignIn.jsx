/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/mega-logo.svg'
import { signIn } from '../../store/authSlice'
import { KEY_AUTH } from '../../utils/constants/general'
import { saveToSessionStorage } from '../../utils/helpers/general'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'
import {
   InputWrapper,
   StyledForm,
   StyledLogo,
   Wrapper,
   InputsContainer,
   HelperText,
} from './SignUp'

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
      dispatch(signIn(submittedData))
         .unwrap()
         .then((data) => {
            reset()
            saveToSessionStorage(KEY_AUTH, data.token)
         })
   }

   useEffect(() => {
      if (isAuthorized) navigate('/')
   }, [isAuthorized, navigate])

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={handleSubmit(signInHandler)}>
               <InputsContainer>
                  <InputWrapper>
                     <label htmlFor="nickName">Никнейм</label>
                     <Input
                        name="nickName"
                        width="231px"
                        isValid={error || errors?.nickname?.message}
                        {...register('nickname', {
                           required: 'Напишите никнейм',
                        })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="password">Пароль</label>
                     <Input
                        name="password"
                        type="password"
                        width="231px"
                        isValid={error || errors?.password?.message}
                        {...register('password', {
                           required: 'Напишите пароль',
                        })}
                     />
                  </InputWrapper>
                  <HelperText color="red">
                     {error && 'Парлоль или никнейм неправильно!'}
                  </HelperText>
               </InputsContainer>
               <Button type="submit" disabled={isLoading}>
                  Войти
               </Button>
            </StyledForm>
         </Wrapper>
      </Card>
   )
}
