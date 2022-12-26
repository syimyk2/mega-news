/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api'

const initialState = {
   newslist: [],
   status: '',
   isLoading: false,
   error: null,
}

export const getNewsList = createAsyncThunk(
   'news/getNewsList',
   async (_, { rejectWithValue }) => {
      console.log('working')
      try {
         const result = await fetchApi({
            method: 'GET',
            path: 'post/',
         })
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const setPending = (state) => {
   state.status = 'loading'
   state.isLoading = true
   state.error = null
}
const setRejected = (state, { error }) => {
   state.status = 'rejected'
   state.error = error.message
   state.isLoading = false
}

const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {},
   extraReducers: {
      [getNewsList.pending]: setPending,
      [getNewsList.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.newslist = payload
         console.log(payload)
      },
      [getNewsList.rejected]: setRejected,
   },
})

export const userProfileActions = newsSlice.actions
export default newsSlice
