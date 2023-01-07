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

const changeInputHandler = ({ target: { value, name } }, setData, data) => {
   if (name === 'location') setData({ ...data, [name]: { id: value } })
   else setData({ ...data, [name]: value })
}

export const AddPublicForm = ({ isVisible, onClose, onGetData }) => {
   const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
   const [data, setData] = useState(null)
   const [selectedImages, setImages] = useState({ image: null, file: null })

   const onDrop = ({ target }) => {
      const fileData = target.files
      const img = URL.createObjectURL(fileData[0])
      setImages({ image: img, file: fileData[0] })
   }

   const submitHandler = (e) => {
      e.preventDefault()
      onGetData({ data, file: selectedImages.file })
   }

   return (
      <Modal isVisible={isVisible} onClose={onClose} width="637px">
         <PublicForm onSubmit={submitHandler}>
            <StyledInputConatainer>
               <InputWrapper>
                  <label htmlFor="newsBunner">Обложка новости</label>
                  <Flex width="350px">
                     <FileDownloader htmlFor="img">
                        <p>Загрузить</p>
                        <DownloadIcon />
                        <input
                           onChange={onDrop}
                           id="img"
                           accept="image/png, image/gif, image/jpeg"
                           name="newsBunner"
                           type="file"
                        />
                     </FileDownloader>
                  </Flex>
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="title">Заголовок</label>
                  <StyledInput
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="title"
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="shortDesc">Краткое описание</label>
                  <StyledInput
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="short_desc"
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="text">Текст новости</label>
                  <StyledInput
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="text"
                     width="350px"
                     type="textarea"
                     rows="4"
                     cols="50"
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="tag">Выбрать категорию</label>
                  <StyledInput
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="tag"
                  />
               </InputWrapper>
            </StyledInputConatainer>
            <Button>Создать</Button>
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
