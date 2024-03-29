import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const CheckboxHeart = (props) => {
   return (
      <Checkbox
         {...label}
         {...props}
         icon={<FavoriteBorder />}
         checkedIcon={<Favorite />}
         sx={{
            '&:hover': {
               '&, & + .MuiFormControlLabel-label': {
                  color: '#000000',
               },
            },
            '&.Mui-checked': {
               '&, & + .MuiFormControlLabel-label': {
                  color: '#a02222',
               },
            },
         }}
         disableRipple
      />
   )
}
