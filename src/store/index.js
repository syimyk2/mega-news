import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import newsSlice from './newsSlice'
import profileSlice from './profileSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      news: newsSlice.reducer,
      profile: profileSlice.reducer,
   },
})
export default store
