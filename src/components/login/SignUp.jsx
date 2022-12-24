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
      formState: { errors, isValid, isSubmitted },
      reset,
      watch,
   } = useForm({
      mode: 'onChange',
   })

   const password = watch('password')
   const submitUserHandler = (userData) => {
      dispatch(signUp({ userData }))
      reset()
   }

   useEffect(() => {
      if (isAuthorized) navigate('/sign-in')
   }, [isAuthorized, navigate])

   return (
      <Card>
         <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <StyledForm onSubmit={handleSubmit(submitUserHandler)}>
               <InputsContainer>
                  <InputWrapper>
                     <label htmlFor="last_name">Фамилия</label>
                     <Input
                        name="last_name"
                        width="231px"
                        isValid={errors?.last_name?.message}
                        {...register('last_name', {
                           required: 'Напишите фамилию',
                        })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="name">Имя</label>
                     <Input
                        name="name"
                        width="231px"
                        isValid={errors?.name?.message}
                        {...register('name', { required: 'Напишите имя' })}
                     />
                  </InputWrapper>
                  <InputWrapper>
                     <label htmlFor="nickname">Никнейм</label>
                     <Input
                        name="nickname"
                        width="231px"
                        isValid={errors?.nickname?.message}
                        {...register('nickname', {
                           required: 'Напишите никнейм',
                        })}
                     />
                  </InputWrapper>
                  <Flex direction="column" justify="center">
                     <InputWrapper>
                        <label
                           style={{ marginBottom: '20px' }}
                           htmlFor="password"
                        >
                           Пароль
                        </label>
                        <Flex direction="column" justify="center">
                           <Input
                              name="password"
                              type="password"
                              width="231px"
                              isValid={errors?.password?.message}
                              {...register('password', {
                                 required: 'Некорректный пароль!',
                                 pattern: {
                                    value: REGEXP_PASSWORD,
                                    message: 'Некорректный пароль!',
                                 },
                              })}
                           />
                           <HelperText>Лимит на символы</HelperText>
                        </Flex>
                     </InputWrapper>
                  </Flex>
                  <InputWrapper>
                     <label htmlFor="pass2">Подтверждение пароля</label>
                     <Flex direction="column" justify="center">
                        <Input
                           name="pass2"
                           type="password"
                           width="231px"
                           isValid={errors?.password2?.message}
                           {...register('password2', {
                              required: 'Пароль не совпадает',
                              validate: (value) =>
                                 value === password || 'Пароль не совпадает',
                           })}
                        />
                        {errors?.password2?.message && (
                           <HelperText color="red">
                              {errors.password2.message}
                           </HelperText>
                        )}
                     </Flex>
                  </InputWrapper>
               </InputsContainer>
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
export const HelperText = styled.p`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 20px;
   color: ${({ color }) => color || '#5a5a5a'};
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
