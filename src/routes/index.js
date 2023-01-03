import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import { FavoriteNews } from '../pages/favorite-news'
import { SignInPage } from '../pages/login/SignInPage'
import { SignUpPage } from '../pages/login/SignUpPage'
import { MainPage } from '../pages/main'
import { NewsDetail } from '../pages/news-detail'
import { Profile } from '../pages/profil'
import { ROUTES } from '../utils/constants/routes-data'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const { signUp, signIn, main, newsDetail, favoriteNews, profile } = ROUTES

   return (
      <Routes>
         <Route path={signUp.path} element={<SignUpPage />} />
         <Route path={signIn.path} element={<SignInPage />} />
         <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
            <Route element={<Layout />}>
               <Route path={main.path} element={<MainPage />} />
               <Route path={newsDetail.path} element={<NewsDetail />} />
               <Route path={favoriteNews.path} element={<FavoriteNews />} />
               <Route path={profile.path} element={<Profile />} />
            </Route>
         </Route>
      </Routes>
   )
}
