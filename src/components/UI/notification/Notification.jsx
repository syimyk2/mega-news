import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import { Flex } from '../../../styles/styles-for-positions/style'
import 'react-toastify/dist/ReactToastify.css'
import { Paragraph } from '../typography/Paragraph'

export const showSuccessMessage = (msg) => {
   toast.success(
      <Flex direction="column" gap="15px">
         <Paragraph color="#07bc0c">{msg.message}</Paragraph>
      </Flex>
   )
}

export const showErrorMessage = (msg) => {
   toast.error(
      <Flex direction="column" gap="10px">
         <Paragraph color="#e24c43">{msg.message}</Paragraph>
      </Flex>
   )
}
const Notification = () => {
   return (
      <StyledToastContainer
         autoClose={3000}
         position="top-right"
         hideProgressBar
         closeOnClick
         pauseOnFocusLoss
         pauseOnHover
      />
   )
}

const StyledToastContainer = styled(ToastContainer)`
   width: 412px;
   color: white;
   @media (max-width: 430px) {
      max-width: 612px;
      width: 100%;
      padding: 1rem;
   }
   .Toastify__toast--success {
      background: #ffffff;
      border-radius: 5px;
      box-sizing: 3px 3px 10px rgba(0, 0, 0, 0.3);
   }
   .Toastify__toast--error {
      background: #ffffff;
      border-radius: 5px;
      box-sizing: 3px 3px 10px rgba(0, 0, 0, 0.3);
   }
   .Toastify__toast-icon {
      width: 0;
      height: 0;
   }
   .Toastify__progress-bar--success {
      background: #21262b;
   }
   svg {
      path {
         fill: #21262b;
      }
   }
`

export default Notification
