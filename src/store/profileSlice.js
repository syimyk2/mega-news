/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api'
import {
   getDataFromSessionStorage,
   saveToSessionStorage,
} from '../utils/helpers/general'

export const postMyPublicRequest = createAsyncThunk(
   'news/postMyPublicRequest',
   async (publicData, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('image', publicData.file)
         const result = await fetchApi({
            method: 'POST',
            path: `post/`,
            body: { ...publicData.data, formData },
         })
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getMyPublicsRequest = createAsyncThunk(
   'news/getMyPublicsRequest',
   async (nickname, { rejectWithValue }) => {
      const newsData = getDataFromSessionStorage('_MY_PUBLICS')
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `post/`,
               params: {
                  author: 'userbek1',
               },
            })
            saveToSessionStorage('_MY_PUBLICS', result)
            return result
         } catch (error) {
            rejectWithValue(error)
         }
      } else {
         return newsData
      }
   }
)

// like requests
export const setLikeNews = createAsyncThunk(
   'news/setLikeNews',
   async (postId, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            method: 'POST',
            path: `like/`,
            body: postId,
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

const initialState = {
   myPublics: getDataFromSessionStorage('_MY_PUBLICS') || [],
   status: '',
   isLoading: false,
   error: null,
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: {
      [getMyPublicsRequest.pending]: setPending,
      [getMyPublicsRequest.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.myPublics = payload
         console.log('myPublics', payload)
      },

      [postMyPublicRequest.pending]: setPending,
      [postMyPublicRequest.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
      },

      [getMyPublicsRequest.rejected]: setRejected,
      [postMyPublicRequest.rejected]: setRejected,
   },
})

export const userProfileActions = profileSlice.actions
export default profileSlice
