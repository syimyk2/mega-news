import styled, { createGlobalStyle } from 'styled-components'
import { ReactComponent as NavBurger } from '../../assets/icons/burger-menu.svg'
import { ReactComponent as NavProfil } from '../../assets/icons/profil.svg'
import { ReactComponent as NavSearch } from '../../assets/icons/search.svg'
import { LogoMega } from '../../components/UI/logo/LogoMega'
// import { Title } from '../../components/UI/typography/Title'
import { Flex } from '../../styles/styles-for-positions/style'
import media from '../../utils/helpers/media'

export const Nav = ({ isSwitched }) => {
   //    const [showMenu, setShowMenu] = useState(false)

   //    const showMenuHamdler = () => setShowMenu(true)

   //    const logOutHandler = () => {
   //       // logout dispatch
   //       console.log(showMenu)
   //    }

   return (
      <>
         <GlobalStyle />
         <NavStyled>
            <LogoMega color={isSwitched && 'init'} />
            <HeaderActions isSwitched={isSwitched}>
               <NavSearch fontSize={29} />
               <NavProfil fontSize={28} />
               <NavBurger fontSize={29} />
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
   gap: 24px;
   cursor: pointer;
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
           color:#FF4B4B;
        }
    }
    a.active{
           color:#FF4B4B;
        }
`
