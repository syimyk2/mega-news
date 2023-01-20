import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'

const LoaderCheckbox = ({ length }) => {
   return (
      <FlexCard width="100%">
         {Array.from({ length: length || 3 }).map(() => (
            <P key={Math.random()} />
         ))}
      </FlexCard>
   )
}
const FlexCard = styled(Flex)`
   max-width: 1200px;
   margin: 0 auto;
   flex-wrap: wrap;
   gap: 18px;
`

const P = styled.p`
   position: relative;
   background-color: rgba(0, 0, 0, 0.06);
   gap: 20px;
   width: 100%;
   height: 20px;
   box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
   border-radius: 3px;
   animation: skeleton-anim 1s 0.5s infinite alternate;
   @keyframes skeleton-anim {
      0% {
         opacity: 0.3;
      }
      100% {
         opacity: 0.8;
      }
   }
`

export default LoaderCheckbox
