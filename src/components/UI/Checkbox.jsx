import * as React from 'react'
import CheckBox from '@mui/material/Checkbox'

export const Checkbox = ({ checked, onChecked }) => {
   return (
      <CheckBox
         color="secondary"
         checked={checked}
         onChange={(e) => onChecked(e.target.checked)}
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
