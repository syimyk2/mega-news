import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
// import modalSlice from './modalSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      //   modal: modalSlice.reducer,
      //   userProfile: userProfileSlice.reducer,
   },
})

export default store
