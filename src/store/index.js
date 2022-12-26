import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import newsSlice from './newsSlice'
import userProfileSlice from './userProfileSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      news: newsSlice.reducer,
      userProfile: userProfileSlice.reducer,
   },
})
export default store
