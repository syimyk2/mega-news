import { forwardRef } from 'react'
import styled from 'styled-components'

export const Input = forwardRef((props, ref) => {
   if (props.type === 'textarea') {
      return <TextArea {...props} ref={ref} type={null} />
   }
   if (props.type === 'select') {
      return (
         <InputStyledSelect ref={ref} {...props}>
            {props.options.map((option) => (
               <option value={option.path} key={option}>
                  {option.label}
               </option>
            ))}
         </InputStyledSelect>
      )
   }
   return (
      <InputStyled
         type={props.type || 'text'}
         autoComplete="off"
         ref={ref}
         {...props}
      />
   )
})

const TextArea = styled.textarea`
   width: ${({ width }) => width || '100%'};
   padding: 7px 12px;
   border: 1px solid #e4dfdc;
   border-radius: 10px;
   letter-spacing: 0.6px;
   font-family: 'Ubuntu';
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   background-color: #c8ced5;
   resize: none;
   /* ::placeholder {
      color: #d0d2d3;
   }
   :active {
      border: 1px solid #7e5bc2;
   } */
   :focus {
   }
   :disabled,
   :disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
   }
`

const InputStyled = styled.input`
   width: ${({ width }) => width || '100%'};
   padding: 7px 12px;
   border: ${({ isValid }) =>
      isValid ? '1px solid red' : '1px solid #e4dfdc'};
   border-radius: 10px;
   letter-spacing: 0.6px;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
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
   :disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
   }
`
const InputStyledSelect = styled.select`
   width: ${({ width }) => width || '100%'};
   padding: 7px 12px;
   border: 1px solid #e4dfdc;
   border-radius: 5px;
   letter-spacing: 0.6px;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   :active {
      border: 1px solid #b6b4b3;
   }
   :focus {
   }
   :disabled,
   :disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
   }
`
