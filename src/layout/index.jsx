import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = () => {
   return (
      <>
         <Header />
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </>
   )
}

export default Layout

const Main = styled.main`
   min-height: 80vh;
   width: 100%;
`
