/* eslint-disable no-unused-vars */
import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import ImagePicker from '../UI/image-picker/Index'
import { Flex } from '../../styles/styles-for-positions/style'
import { Button } from '../UI/Button'
import { Title } from '../UI/typography/Title'
import { ReactComponent as Edit } from '../../assets/icons/edit.svg'
import { BASE_URL } from '../../api'
import media from '../../utils/helpers/media'

const changeInputHandler = ({ target: { value, name } }, setData, data) => {
   if (name === 'location') setData({ ...data, [name]: { id: value } })
   else setData({ ...data, [name]: value })
}
const inputEnableState = {
   name: false,
   lastName: false,
   nickname: false,
}
export const ProfileForm = ({ onGetData, profile }) => {
   const isMobile = useMediaQuery({ query: `(max-width: 450px)` })
   const [errorPhoto, setErrorPhoto] = useState(inputEnableState)
   const [enableInput, setEnableInput] = useState(false)
   const [selectedImages, setImages] = useState({ image: null, file: null })
   const [data, setData] = useState(null)

   const onDrop = ({ target }) => {
      const fileData = target.files
      const img = URL.createObjectURL(fileData[0])
      setImages({ image: img, file: fileData[0] })
      setErrorPhoto(false)
   }

   const enableInputToEditHandler = (key) => {
      switch (key) {
         case 'name':
            setEnableInput({ ...inputEnableState, name: true })
            break
         case 'lastName':
            setEnableInput({ ...inputEnableState, lastName: true })
            break
         case 'nickname':
            setEnableInput({ ...inputEnableState, nickname: true })
            break
         default:
            setEnableInput(inputEnableState)
            break
      }
   }

   const submitHandler = (e) => {
      e.preventDefault()
      onGetData({ data, file: selectedImages.file })
   }

   const deleteImageHandler = () => setImages({ image: null, file: null })

   useEffect(() => {
      setImages({ image: `${BASE_URL}${profile?.profile_image}` || null })
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
      <Flex direction="column" width={isMobile && '100%'}>
         {errorPhoto && (
            <Alert severity="error">photo size must be less than 5MB</Alert>
         )}
         <Form onSubmit={submitHandler}>
            <ImagePicker
               deleteHandler={deleteImageHandler}
               onDrop={onDrop}
               file={selectedImages.image}
            />
            <Flex
               direction="column"
               gap="20px"
               minWidth={isMobile ? '' : '320px'}
               width={isMobile && '100%'}
            >
               <InputWrapper>
                  <label htmlFor="nickname">Фамилия</label>
                  <Input
                     value={data?.last_name || ''}
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="last_name"
                     autoFocus
                     required
                     disabled={!enableInput.lastName}
                     onBlur={() => enableInputToEditHandler('')}
                  />
                  <StyledEditIcon
                     onClick={() => enableInputToEditHandler('lastName')}
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="nickname">Имя</label>
                  <Input
                     value={data?.name || ''}
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="name"
                     required
                     disabled={!enableInput.name}
                     onBlur={() => enableInputToEditHandler('')}
                  />
                  <StyledEditIcon
                     onClick={() => enableInputToEditHandler('name')}
                  />
               </InputWrapper>
               <InputWrapper>
                  <label htmlFor="nickname">Никнейм</label>
                  <Input
                     value={data?.nickname || ''}
                     onChange={(e) => changeInputHandler(e, setData, data)}
                     name="nickname"
                     required
                     disabled={!enableInput.nickname}
                     onBlur={() => enableInputToEditHandler('')}
                  />
                  <StyledEditIcon
                     onClick={() => enableInputToEditHandler('nickname')}
                  />
               </InputWrapper>
               <ButtonWrapper>
                  <Button>Сохранить</Button>
               </ButtonWrapper>
            </Flex>
         </Form>
      </Flex>
   )
}

const StyledEditIcon = styled(Edit)`
   cursor: pointer;
   position: absolute;
   top: 8px;
   right: 10px;

   :hover {
      path {
         stroke: #7e5bc2;
      }
   }
   ${media.mobile`
    top: 25px;
    right: 10px;

   `}
`
const InputWrapper = styled(Flex)`
   justify-content: space-between;
   align-items: center;
   position: relative;
   input {
      width: 231px;
      ${media.mobile`
     width: 100%;

   `}
   }

   ${media.mobile`
    flex-direction:  column;
    align-items: flex-start;
    justify-content: static;

   `}
`

const ButtonWrapper = styled.div`
   display: flex;
   width: 100%;
   justify-content: end;
   button {
      font-size: 13px;
   }
`
const Form = styled.form`
   width: 100%;
   display: flex;
   gap: 200px;
   justify-content: space-between;
   align-items: center;
   animation: yes ease 0.4;

   label {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
   }

   ${media.tablet`
     gap: 10px;

   `}
   @media (max-width: 450px) {
      gap: 20px;
      align-items: flex-start;
   }

   @keyframes yes {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
const Input = styled.input`
   width: ${({ width }) => width || '100%'};
   padding: 7px 12px;
   border: ${({ isValid }) =>
      isValid ? '1px solid red' : '1px solid #7e5bc2'};
   border-radius: 10px;
   letter-spacing: 0.6px;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   background: '#ffffff';
   ::placeholder {
      color: #858080;
   }
   :active {
      border: 1px solid #7e5bc2;
   }
   :focus {
      border-color: transparent;
      box-shadow: ${({ isValid }) =>
         isValid ? '0 0 0 1px rgba(255, 8, 0, 0.5)' : '0 0 0 1px  #7e5bc2;'};
   }
   :disabled,
   :disabled:active,
   :disabled:hover {
      opacity: 1;
      background: #ffffff;
      border: 1px solid #d9d9d9;
   }
`
