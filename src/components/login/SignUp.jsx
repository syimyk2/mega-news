/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/mega-logo.svg'
import { signUp } from '../../store/authSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import { REGEXP_PASSWORD } from '../../utils/constants/general'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'

export const SignUp = () => {
   const { error, isAuthorized, isLoading } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      // formState: { errors, isValid, isSubmitted, messages},
      reset,
   } = useForm({
      mode: 'onChange',
   })
   const submitUserHandler = (userData) => {
      console.log(userData)
      // dispatch(signUp({ userData, reset }))
   }

   useEffect(() => {
      if (isAuthorized) navigate('/sign-in')
   }, [isAuthorized, navigate])

   // const errorPasswordMessage =
   //    (errors?.password && errors.password.message) || ''

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={handleSubmit(submitUserHandler)}>
               <WrapperInputs>
                  <InputWrapper>
                     <label htmlFor="lastName">Фамилия</label>
                     <Input
                        name="lastName"
                        width="231px"
                        {...register('lastName', { required: true })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="name">Имя</label>
                     <Input
                        name="name"
                        width="231px"
                        {...register('firstName', { required: true })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="nickName">Никнейм</label>
                     <Input
                        name="nickName"
                        width="231px"
                        {...register('nickName', { required: true })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="password">Пароль</label>
                     <Input
                        name="password"
                        type="password"
                        width="231px"
                        {...register('password', {
                           required: true,
                           pattern: {
                              value: REGEXP_PASSWORD,
                              message: 'Некорректный пароль!',
                           },
                        })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="pass2">Подтверждение пароля</label>
                     <Input
                        name="pass2"
                        type="password"
                        width="231px"
                        {...register('confirmPassword', {
                           required: true,
                        })}
                     />
                  </InputWrapper>
               </WrapperInputs>
               <Button type="submit" disabled={isLoading}>
                  Регистрация
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
`

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 412px;
   margin: 31px 45px 15px 25px;
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const WrapperInputs = styled.div`
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
      color: #010101;
   }
`
export const StyledLogo = styled.img`
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
