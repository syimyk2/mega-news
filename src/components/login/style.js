import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { Input } from '../UI/Input'
import Spinner from '../UI/loader/Spinner'

export const LoginLoader = () => {
   return (
      <Flex width="50px" justify="center">
         <Spinner size="20" />
      </Flex>
   )
}

export const InputWrapper = styled(Flex)`
   justify-content: space-between;
   align-items: center;

   @media (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: baseline;
      width: 100%;
      gap: 5px;
   }
`
export const StyledInput = styled(Input)`
   width: 231px;

   @media (max-width: 450px) {
      width: 100%;
      padding: 7px 12px;
      font-size: 14px;
   }
`
export const HelperText = styled.p`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 20px;
   color: ${({ color }) => color || '#5a5a5a'};
   width: 210px;
`

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 412px;
   margin: 31px 45px 15px 25px;

   @media (max-width: 450px) {
      width: 100%;
      margin: 24px 24px 15px;
   }
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const InputsContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-bottom: 43px;
   label {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
   }
   @media (max-width: 425px) {
      margin-bottom: 32px;
      gap: 16px;
   }
`
export const StyledLogo = styled.img`
   width: 129px;
   height: 29px;
`
export const NavigateBlock = styled.div`
   display: flex;
   gap: 3px;
   margin: 0 23px 0 0;
   p,
   a {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #5a5a5a;
   }
   a {
      color: #2d4ec2;
   }
   @media (max-width: 450px) {
      margin: 0;
   }
`
