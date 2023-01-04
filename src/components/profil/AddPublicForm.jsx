import React from 'react'
// import { Flex } from '../../styles/styles-for-positions/style'
import { InputsContainer, InputWrapper } from '../login/SignUp'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import Modal from '../UI/modal/Modal'

export const AddPublicForm = ({ isVisible, onClose }) => {
   return (
      <Modal isVisible={isVisible} onClose={onClose} width="637px">
         <InputsContainer>
            <InputWrapper>
               <label htmlFor="newsBunner">Обложка новости</label>
               <Input name="newsBunner" type="file" />
            </InputWrapper>
            <InputWrapper>
               <label htmlFor="title">Заголовок</label>
               <Input name="title" width="231px" />
            </InputWrapper>
            <InputWrapper>
               <label htmlFor="shortDesc">Краткое описание</label>
               <Input name="shortDesc" width="231px" />
            </InputWrapper>
            <InputWrapper>
               <label htmlFor="text">Текст новости</label>
               <Input name="text" width="231px" type="textarea" />
            </InputWrapper>
            <InputWrapper>
               <label htmlFor="tag">Выбрать категорию</label>
               <Input name="tag" width="231px" />
            </InputWrapper>
         </InputsContainer>
         <Button>Создать</Button>
      </Modal>
   )
}
