import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { ReactComponent as NavBurger } from '../../assets/icons/burger-menu.svg'
import { ReactComponent as NavProfil } from '../../assets/icons/profil.svg'
import { ReactComponent as NavSearch } from '../../assets/icons/search.svg'
import { LogoMega } from '../../components/UI/logo/LogoMega'
import { filterNewsRequest } from '../../store/newsSlice'
import { Flex } from '../../styles/styles-for-positions/style'
import {
   changeInput,
   getDataFromSessionStorage,
   saveToSessionStorage,
} from '../../utils/helpers/general'
import media from '../../utils/helpers/media'
import { HeadPopUp } from './HeadPopUp'
import { SearchBar } from './SearchBar'

const initialActions = {
   search: false,
   profil: false,
   menu: false,
}

export const Nav = ({ isSwitched }) => {
   const dispatch = useDispatch()
   const [actions, setActions] = useState(initialActions)
   const [filter, setFilter] = useState(
      getDataFromSessionStorage('filter') || {}
   )

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

   useEffect(() => {
      dispatch(filterNewsRequest(filter))
      saveToSessionStorage('filter', filter)
   }, [filter])

   return (
      <>
         <HeadPopUp actions={actions} onClose={closePopUpHandler} />
         <GlobalStyle />
         <NavStyled>
            <LogoMega color={isSwitched ? 'init' : 'light'} />
            <HeaderActions isSwitched={isSwitched}>
               <SearchBar
                  actions={actions}
                  filter={filter}
                  onChange={(e) => changeInput(e, filter, setFilter)}
               />
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
