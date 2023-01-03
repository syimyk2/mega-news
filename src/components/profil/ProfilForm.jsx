/* eslint-disable no-unused-vars */
import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import ImagePicker from '../UI/image-picker/Index'
import { Flex } from '../../styles/styles-for-positions/style'
import { Input } from '../UI/Input'
import { InputWrapper } from '../login/SignUp'
import { Button } from '../UI/Button'
import { Title } from '../UI/typography/Title'

export const ProfileForm = ({ onGetData, profile }) => {
   const isMobile = useMediaQuery({ query: `(max-width: 450x)` })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [selectedImages, setImages] = useState({ image: null, file: null })
   const [data, setData] = useState(null)

   const onDrop = ({ target }) => {
      const fileData = target.files

      if (fileData[0].size / 1000 < 5000) {
         const img = URL.createObjectURL(fileData[0])
         setImages({ image: img, file: fileData[0] })
         setErrorPhoto(false)
      } else {
         setErrorPhoto(true)
      }
   }

   const submitHandler = (e) => {
      e.preventDefault()
      onGetData({ data, file: selectedImages.file })
   }

   const deleteImageHandler = () => setImages({ image: null, file: null })

   const changeInputHandler = ({ target: { value, name } }, setData, data) => {
      if (name === 'location') setData({ ...data, [name]: { id: value } })
      else setData({ ...data, [name]: value })
   }

   useEffect(() => {
      setImages({ image: profile?.photo?.urlPath || null })
      setData({
         name: profile?.name,
         last_name: profile?.last_name,
         nickname: profile?.nickname,
      })
   }, [profile])

   useEffect(() => {
      const errorPhotoTime = setTimeout(() => {
         setErrorPhoto(false)
      }, 2000)
      return () => {
         clearTimeout(errorPhotoTime)
      }
   }, [errorPhoto])

   return (
      <>
         {errorPhoto && (
            <Alert severity="error">photo size must be less than 5MB</Alert>
         )}
         <Form onSubmit={submitHandler}>
            <ImagePicker
               deleteHandler={deleteImageHandler}
               onDrop={onDrop}
               file={selectedImages.image}
            />
            <Flex direction="column" gap="20px" width="320px">
               <InputWrapper>
                  <label htmlFor="nickname">Фамилия</label>
                  <Input
                     value={data?.last_name || ''}
                     width="231px"
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="last_name"
                     required
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="nickname">Имя</label>
                  <Input
                     value={data?.name || ''}
                     width="231px"
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="name"
                     required
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="nickname">Никнейм</label>
                  <Input
                     value={data?.nickname || ''}
                     width="231px"
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="nickname"
                     required
                  />
               </InputWrapper>
               <ButtonWrapper>
                  <Button>
                     <Title size="14px">Сохранить</Title>
                  </Button>
               </ButtonWrapper>
            </Flex>
         </Form>
      </>
   )
}

const ButtonWrapper = styled.div`
   display: flex;
   width: 100%;
   justify-content: end;
`
const Form = styled.form`
   display: flex;
   gap: 96px;
   align-items: center;
   /* width: 100%; */
   animation: yes ease 0.4;

   label {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
   }
   @keyframes yes {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
   @media (max-width: 720px) {
      width: 100%;
      border-radius: 10px;
   }
`
