import { Flex } from '../../styles/styles-for-positions/style'
import Spinner from '../UI/loader/Spinner'

export const LoginLoader = () => {
   return (
      <Flex width="50px" justify="center">
         <Spinner size="20" />
      </Flex>
   )
}
