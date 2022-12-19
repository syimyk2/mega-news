import React from 'react'
import styled from 'styled-components'
import media from '../../../utils/helpers/media'
import { Backdrop } from '../modal/Backdrop'

export const PopUp = ({ isVisible, onClose, children }) => {
   return (
      isVisible && (
         <>
            <Backdrop onClose={onClose} background="transparent" />
            <Meetballs>{children}</Meetballs>
         </>
      )
   )
}
const Meetballs = styled.div`
   width: 176px;
   background: #ffffff;
   box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
   border-radius: 10px;
   padding: 13px 10px;
   position: absolute;
   top: 75px;
   right: 121px;
   animation: YES ease 0.2s;
   z-index: 13;

   ${media.mobile`
       width: 130px;
       top: 51px;
       right: 8px;
      h4 {
        font-size: 11px;
      }
    `}

   @keyframes YES {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
