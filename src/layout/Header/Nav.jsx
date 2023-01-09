import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ReactComponent as NavBurger } from '../../assets/icons/burger-menu.svg'
import { ReactComponent as NavProfil } from '../../assets/icons/profil.svg'
import { ReactComponent as NavSearch } from '../../assets/icons/search.svg'
import { LogoMega } from '../../components/UI/logo/LogoMega'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'
import { HeadPopUp } from './HeadPopUp'
import { SearchBar } from './SearchBar'

const initialActions = {
   search: false,
   profil: false,
   menu: false,
}

export const Nav = ({ isSwitched }) => {
   const [actions, setActions] = useState(initialActions)
   const showSearchBarHandler = () => {
      setActions({ ...initialActions, search: !actions.search })
   }

   const showProfilHandler = () => {
      setActions({ ...initialActions, profil: !actions.profil })
   }

   const showMenuHandler = () => {
      setActions({ ...initialActions, menu: !actions.menu })
   }
   const closePopUpHandler = () => {
      setActions(initialActions)
   }
   return (
      <>
         <HeadPopUp actions={actions} onClose={closePopUpHandler} />
         <GlobalStyle />
         <NavStyled>
            <LogoMega color={isSwitched ? 'init' : 'light'} />
            <HeaderActions isSwitched={isSwitched}>
               <SearchBar actions={actions} />
               <NavSearch onClick={showSearchBarHandler} fontSize={29} />
               <NavProfil onClick={showProfilHandler} fontSize={28} />
               <NavBurger onClick={showMenuHandler} fontSize={29} />
            </HeaderActions>
         </NavStyled>
      </>
   )
}
const NavStyled = styled.nav`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
`
const HeaderActions = styled(Flex)`
   display: flex;
   position: relative;
   gap: 24px;
   cursor: pointer;
   z-index: 15;
   svg {
      path {
         stroke: ${({ isSwitched }) => isSwitched && '#7E5BC2'};
      }
      circle {
         stroke: ${({ isSwitched }) => isSwitched && '#7E5BC2'};
      }
   }

   ${media.tablet`
       gap: 16px;
       svg {
        width: 22px;
       }
`}
`
// const List = styled.ul`
//    list-style: none;
//    display: flex;
//    gap: 40px;
//    ${media.tablet`
//       flex-direction:column;
//       align-items:center;
//       margin:100px 0 300px 0;
// `}
// `
// const Li = styled.li`
//    ${media.tablet`
//    a{
//       color:#000000;
//    }

// `}
// `
// const NabBar = styled.div`
//    border: none;
//    background: none;
//    cursor: pointer;
//    display: none;
//    ${media.tablet`
//       display:block;
//    `}
// `
// const Logout = styled(Title)`
//    cursor: pointer;
//    :hover {
//       color: #ff4b4b;
//    }
// `
const GlobalStyle = createGlobalStyle`
    a{
        text-decoration: none;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        transition: 0.1s;
        :hover{
           color:#bd4bff;
        }
    }
    a.active{
           color:#4b4eff;
        }
`
