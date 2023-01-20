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
import { Input } from '../UI/Input'
import { LoginLoader } from './style'

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

export const InputWrapper = styled(Flex)`
   justify-content: space-between;
   align-items: center;

   @media (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: baseline;
      width: 100%;
      gap: 5px;
   }
`
export const StyledInput = styled(Input)`
   width: 231px;

   @media (max-width: 450px) {
      width: 100%;
      padding: 7px 12px;
      font-size: 14px;
   }
`
export const HelperText = styled.p`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 20px;
   color: ${({ color }) => color || '#5a5a5a'};
   width: 210px;
`
const PasswordWrapper = styled(Flex)`
   flex-direction: column;
   justify-content: center;

   @media (max-width: 450px) {
      width: 100%;
   }
`

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 412px;
   margin: 31px 45px 15px 25px;

   @media (max-width: 450px) {
      width: 100%;
      margin: 24px 24px 15px;
   }
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const InputsContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-bottom: 43px;
   label {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
   }
   @media (max-width: 425px) {
      margin-bottom: 32px;
      gap: 16px;
   }
`
export const StyledLogo = styled.img`
   width: 129px;
   height: 29px;
`
export const NavigateBlock = styled.div`
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
