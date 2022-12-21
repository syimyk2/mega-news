import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import { SignInPage } from '../pages/login/SignInPage'
import { SignUpPage } from '../pages/login/SignUpPage'
import { MainPage } from '../pages/main'
import { ROUTES } from '../utils/constants/routes-data'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRoutes = () => {
   const [isAuthorized, setState] = useState(true)

   useEffect(() => {
      setState(true)
   }, [])

   const { signUp, signIn, main } = ROUTES
   return (
      <Routes>
         <Route path={signUp.path} element={<SignUpPage />} />
         <Route path={signIn.path} element={<SignInPage />} />
         <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
            <Route element={<Layout />}>
               <Route path={main.path} element={<MainPage />} />
            </Route>
         </Route>
      </Routes>
   )
}
