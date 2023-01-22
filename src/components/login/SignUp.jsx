/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/mega-logo.svg'
import { signUp } from '../../store/authSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { REGEXP_PASSWORD } from '../../utils/constants/general'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import {
   HelperText,
   InputsContainer,
   InputWrapper,
   LoginLoader,
   NavigateBlock,
   StyledForm,
   StyledInput,
   StyledLogo,
   Wrapper,
} from './style'

export const SignUp = () => {
   const { error, isAuthorized, isLoading } = useSelector((state) => state.auth)
   const isMobile = useMediaQuery({ query: `(max-width: 450px)` })
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitted },
      reset,
      watch,
   } = useForm({
      mode: 'onChange',
   })

   const callAfterRequest = () => {
      reset()
      navigate('/sign-in')
   }

   const password = watch('password')
   const submitUserHandler = (userData) => {
      dispatch(signUp({ userData, reset: callAfterRequest }))
   }

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={handleSubmit(submitUserHandler)}>
               <InputsContainer>
                  <InputWrapper>
                     <label htmlFor="last_name">Фамилия</label>
                     <StyledInput
                        name="last_name"
                        isValid={errors?.last_name?.message}
                        {...register('last_name', {
                           required: 'Напишите фамилию',
                        })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="name">Имя</label>
                     <StyledInput
                        name="name"
                        isValid={errors?.name?.message}
                        {...register('name', { required: 'Напишите имя' })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="nickname">Никнейм</label>
                     <StyledInput
                        name="nickname"
                        isValid={errors?.nickname?.message}
                        {...register('nickname', {
                           required: 'Напишите никнейм',
                        })}
                     />
                  </InputWrapper>
                  <Flex direction="column" justify="center">
                     <InputWrapper>
                        <label
                           style={{ marginBottom: !isMobile && '20px' }}
                           htmlFor="password"
                        >
                           Пароль
                        </label>
                        <PasswordWrapper>
                           <StyledInput
                              name="password"
                              type="password"
                              isValid={errors?.password?.message}
                              {...register('password', {
                                 required: 'Придумайте пароль!',
                                 pattern: {
                                    value: REGEXP_PASSWORD,
                                    message:
                                       'This password is too short. It must contain at least 8 characters and at least one uppercase letter, one lowercase letter, and one number',
                                 },
                              })}
                           />
                           <HelperText>Лимит на символы</HelperText>
                           {errors?.password?.message && (
                              <HelperText color="red">
                                 {errors?.password?.message}
                              </HelperText>
                           )}
                        </PasswordWrapper>
                     </InputWrapper>
                  </Flex>
                  <InputWrapper>
                     <label htmlFor="pass2">Подтверждение пароля</label>
                     <PasswordWrapper>
                        <StyledInput
                           name="pass2"
                           type="password"
                           isValid={errors?.password2?.message}
                           {...register('password2', {
                              required: 'Подвердите ваш пароль',
                              validate: (value) =>
                                 value === password || 'Пароль не совпадает',
                           })}
                        />
                        {errors?.password2?.message && (
                           <HelperText color="red">
                              {errors?.password2?.message}
                           </HelperText>
                        )}
                     </PasswordWrapper>
                  </InputWrapper>
               </InputsContainer>
               <Button type="submit" disabled={isLoading}>
                  {isLoading ? <LoginLoader /> : 'Регистрация'}
               </Button>
            </StyledForm>
            <NavigateBlock>
               <p>Уже есть логин?</p>
               <a href="/sign-in">Войти</a>
            </NavigateBlock>
         </Wrapper>
      </Card>
   )
}

const PasswordWrapper = styled(Flex)`
   flex-direction: column;
   justify-content: center;

   @media (max-width: 450px) {
      width: 100%;
   }
`
