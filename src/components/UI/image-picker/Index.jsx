import React from 'react'
import styled from 'styled-components'
import { BsPlusCircleFill } from 'react-icons/bs'
import { Flex } from '../../../styles/styles-for-positions/style'

const ImagePicker = React.forwardRef(
   ({ onDrop, file = {}, deleteHandler, ...props }, ref) => {
      return (
         <Wrapper disabled={props.disabled} align="center" gap="16px">
            <Flex gap="5px" wrap="wrap">
               {(!file && (
                  <ProfileImage htmlFor="img">
                     <PlusProfileImage>
                        <BsPlusCircleFill size={30} />
                     </PlusProfileImage>
                     <input
                        onChange={onDrop}
                        id="img"
                        accept="image/png, image/gif, image/jpeg"
                        {...props}
                        ref={ref}
                        type="file"
                        name="image"
                     />
                     Upload your photo
                  </ProfileImage>
               )) || (
                  <GroupImg>
                     <Image src={file} />
                     <DeleteBtn type="button" onClick={() => deleteHandler()}>
                        DELETE
                     </DeleteBtn>
                  </GroupImg>
               )}
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
   width: 116px;
   height: 116px;
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
   position: absolute;
   right: -5px;
   bottom: 5px;
   @media (max-width: 425px) {
      right: -10px;
      bottom: -3px;
   }
`
const ProfileImage = styled.label`
   box-sizing: border-box;
   padding: 10px;
   width: 116px;
   height: 116px;
   border-radius: 100%;
   background: rgba(103, 144, 248, 0.3);
   border: 2px dashed #6790f8;
   font-family: var(--base-font);
   font-size: 12px;
   text-align: center;
   letter-spacing: -0.01em;
   color: #5932ea;
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   :hover {
      opacity: 0.8;
   }
   input {
      opacity: 0;
      position: absolute;
   }
   @media (max-width: 425px) {
      width: 80px !important;
      height: 80px !important;
      font-size: 10px;
   }
`
export default ImagePicker
