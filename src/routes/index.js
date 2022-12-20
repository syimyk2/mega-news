import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />} />
      </Routes>
   )
}
