import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import userProfileSlice from './userProfileSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      userProfile: userProfileSlice.reducer,
   },
})
export default store
