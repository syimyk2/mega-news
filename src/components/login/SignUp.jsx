import React from 'react'
import logo from '../../assets/images/mega-logo.svg'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Input } from '../UI/Input'

export const SignUp = () => {
   const signUpHandler = () => {}
   return (
      <Card>
         <form onSubmit={signUpHandler}>
            <img src={logo} alt="logo" />
            <Flex>
               <Flex justify="space-between">
                  <label htmlFor="843">Фамилия</label> <Input type="text" />
               </Flex>
               <Flex justify="space-between">
                  <label htmlFor="843">Имя</label> <Input type="text" />
               </Flex>
               <Flex justify="space-between">
                  <label htmlFor="843">Никнейм</label> <Input type="text" />
               </Flex>
               <Flex justify="space-between">
                  <label htmlFor="843">Пароль</label> <Input type="password" />
               </Flex>
               <Flex justify="space-between">
                  <label htmlFor="843">Подтверждение пароля</label>
                  <Input type="password" />
               </Flex>
            </Flex>
            <Button>Регистрация</Button>
            <div>
               <p>
                  Уже есть логин?
                  <a>Войти</a>
               </p>
            </div>
         </form>
      </Card>
   )
}
