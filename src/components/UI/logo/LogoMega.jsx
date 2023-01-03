import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LogoLight } from '../../../assets/images/mega-logo_light.svg'
import { ReactComponent as LogoInit } from '../../../assets/images/mega-logo.svg'
import media from '../../../utils/helpers/media'

export const LogoMega = ({ color = 'light', size }) => {
   const navigate = useNavigate()
   const clickHandler = () => navigate('/')
   return (
      <>
         <GlobalStyle />
         {color === 'light' && (
            <LogoLight onClick={clickHandler} size={size} className="logo" />
         )}
         {color === 'init' && (
            <LogoInit onClick={clickHandler} size={size} className="logo" />
         )}
      </>
   )
}
const GlobalStyle = createGlobalStyle`
    .logo{
        cursor: pointer;
        width: ${({ size }) => size || '129px'};
        min-width: 120px;
        height: 29px;
        ${media.tablet`
        width:98px;
        height :22px;
        `}
    }
`
