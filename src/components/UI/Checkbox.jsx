import * as React from 'react'
import CheckBox from '@mui/material/Checkbox'

export const Checkbox = ({ onChecked, checked }) => {
   return (
      <CheckBox
         checked={checked}
         onChange={(e) => onChecked(e.target.checked)}
         inputProps={{ 'aria-label': 'controlled' }}
      />
   )
}
