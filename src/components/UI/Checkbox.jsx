import * as React from 'react'
import CheckBox from '@mui/material/Checkbox'

export const Checkbox = (props) => {
   return (
      <CheckBox
         {...props}
         color="secondary"
         sx={{
            '&:hover': {
               '&, & + .MuiFormControlLabel-label': {
                  color: '#7e5bc2',
               },
            },
            '&.Mui-checked': {
               '&, & + .MuiFormControlLabel-label': {
                  color: '#7e5bc2',
               },
            },
         }}
         disableRipple
      />
   )
}
