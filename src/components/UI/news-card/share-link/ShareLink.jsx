import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ShareIcon } from '../../../../assets/icons/share.svg'

export const ShareLink = (props) => {
   return <ShareLinkStyled {...props} />
}

const ShareLinkStyled = styled(ShareIcon)`
   cursor: pointer;
   width: 24px;
   height: 24px;
   :hover {
      path {
         stroke: #7e5bc2;
      }
   }
`
