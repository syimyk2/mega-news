/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Flex } from '../../styles/styles-for-positions/style'
import { InputsContainer } from '../login/SignUp'
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import Modal from '../UI/modal/Modal'

export const ShareLinkModal = ({ isVisible, onClose, onGetData }) => {
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const [data, setData] = useState(null)

   const submitHandler = (e) => {
      e.preventDefault()
      onGetData({ data })
   }

   return (
      <Modal isVisible={isVisible} onClose={onClose} width="300px">
         <PublicForm onSubmit={submitHandler}>
            <StyledInputConatainer>generate link</StyledInputConatainer>
            <Button type="submit">Создать</Button>
         </PublicForm>
      </Modal>
   )
}

const StyledInputConatainer = styled(InputsContainer)`
   padding: 41px 20px 0px;
`

const PublicForm = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const FileDownloader = styled(Flex)`
   justify-content: center;
   align-items: center;
   padding: 8px 15px;
   gap: 10px;
   width: 120px;
   background: #ffffff;
   border: 1px solid #dedce4;
   border-radius: 5px;
   cursor: pointer;
   input {
      opacity: 0;
      position: absolute;
      padding: 8px 15px;
      gap: 10px;
      width: 120px;
      height: 33px;
      border-radius: 5px;
      cursor: pointer;
   }
`
const InputWrapper = styled(Flex)`
   justify-content: space-between;
   align-items: center;
   @media (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
   }
`
const StyledInput = styled(Input)`
   width: 350px;

   @media (max-width: 450px) {
      width: 100%;
   }
`
const SelectedFileName = styled.span`
   font-size: 11px;
   font-family: 'Ubuntu';
   color: #3304c0;
`
