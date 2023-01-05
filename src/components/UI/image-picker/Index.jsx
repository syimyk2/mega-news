import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/styles-for-positions/style'
import { ReactComponent as EmptyAvatar } from '../../../assets/images/empty-avatar-img.svg'
import { ReactComponent as DownloadIcon } from '../../../assets/icons/download.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/trash-2.svg'

const ImagePicker = React.forwardRef(
   ({ onDrop, file = {}, deleteHandler, ...props }, ref) => {
      return (
         <Wrapper disabled={props.disabled} align="center" gap="16px">
            <Flex wrap="wrap" gap="14px" justify="center">
               {(!file && (
                  <Flex direction="column">
                     <ProfileImage>
                        <EmptyAvatar />
                     </ProfileImage>
                  </Flex>
               )) || (
                  <GroupImg>
                     <Image src={file} />
                     <DeleteBtn type="button" onClick={() => deleteHandler()}>
                        DELETE
                     </DeleteBtn>
                  </GroupImg>
               )}
               <PlusProfileImage>
                  <Flex htmlFor="img">
                     <p>Добавить фото</p>
                     <input
                        onChange={onDrop}
                        id="img"
                        accept="image/png, image/gif, image/jpeg"
                        {...props}
                        ref={ref}
                        type="file"
                        name="image"
                     />
                     <DownloadIcon />
                  </Flex>
                  <Flex role="button" onClick={() => deleteHandler()}>
                     <p>Удалить</p>
                     <DeleteIcon />
                  </Flex>
               </PlusProfileImage>
            </Flex>
         </Wrapper>
      )
   }
)
const Wrapper = styled(Flex)`
   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
   pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
`
const DeleteBtn = styled.button`
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   border: none;
   color: whitesmoke;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: none;
   @media (max-width: 425px) {
      font-size: 10px;
   }
`
const GroupImg = styled.div`
   width: 199px;
   height: 199px;
   overflow: hidden;
   border-radius: 50%;
   position: relative;
   cursor: pointer;
   :hover ${DeleteBtn} {
      display: block;
   }
   @media (max-width: 425px) {
      width: 80px;
      height: 80px;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const PlusProfileImage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-family: 'Ubuntu';
   cursor: pointer;
   gap: 9px;

   div {
      gap: 5px;
   }
   svg {
      width: 16px;
      height: 16px;
   }
   @media (max-width: 425px) {
      right: -10px;
      bottom: -3px;
   }
   input {
      opacity: 0;
      position: absolute;
      width: 109px;
   }
`
const ProfileImage = styled.label`
   box-sizing: border-box;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 199px;
   height: 199px;
   border-radius: 100%;
   background: #e8e8e8;
   font-family: var(--base-font);
   font-size: 12px;
   text-align: center;
   letter-spacing: -0.01em;
   color: grey;
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   :hover {
      opacity: 0.8;
   }
   @media (max-width: 425px) {
      width: 80px !important;
      height: 80px !important;
      font-size: 10px;
   }
`
export default ImagePicker
