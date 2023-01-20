/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'

const LoaderCard = () => {
   const isMobile = useMediaQuery({ query: `(max-width: 450px)` })
   return (
      <FlexCard width="100%">
         {Array.from({ length: 10 }).map(() => (
            <Flex width="100%" gap="20px" wrap={isMobile ? 'wrap' : 'nowrap'}>
               <Maket key={Math.random()} />
               <Flex direction="column" gap="10px">
                  <CardItem />
                  <CardItem />
                  <CardItem />
               </Flex>
            </Flex>
         ))}
      </FlexCard>
   )
}
const FlexCard = styled(Flex)`
   max-width: 1200px;
   margin: 0 auto;
   flex-wrap: wrap;
   gap: 18px;
   @media (max-width: 450px) {
      align-items: center;
      justify-content: center;
      width: 100%;
   }
`

const Maket = styled.p`
   position: relative;
   background-color: rgba(0, 0, 0, 0.06);
   gap: 10px;
   width: 190px;
   height: 190px;
   box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
   border-radius: 20px;
   margin-left: 10px;
   @media (max-width: 450px) {
      width: 90%;
      height: 200px;
      gap: 5px;
      margin-left: 15px;
   }
`

const CardItem = styled.span`
   position: relative;
   background-color: rgba(0, 0, 0, 0.06);
   gap: 20px;
   width: 450px;
   height: 30px;
   box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
   border-radius: 10px;
   @media (max-width: 450px) {
      width: 350px;
      gap: 10px;
      height: 20px;
      margin-left: 15px;
   }
`

export default LoaderCard
