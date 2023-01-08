/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi, fetchFile } from '../api'
import { PUBLIC_DATA_KEY, USER_DATA_KEY } from '../utils/constants/general'
import {
   getDataFromSessionStorage,
   saveToSessionStorage,
} from '../utils/helpers/general'

// user data requests
export const getUserData = createAsyncThunk(
   'auth/getUserData',
   async (key, { rejectWithValue }) => {
      const userData = getDataFromSessionStorage(USER_DATA_KEY)
      if (!userData && !key) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: 'user/',
            })
            saveToSessionStorage(USER_DATA_KEY, result)
            return result
         } catch (error) {
            rejectWithValue(error)
         }
      } else {
         return userData
      }
   }
)

export const editUserData = createAsyncThunk(
   'auth/editUserData',
   async (newUserData, { rejectWithValue }) => {
      try {
         const { name, last_name, nickname } = newUserData.data
         const formData = new FormData()
         formData.append(
            'profile_image',
            newUserData.file,
            newUserData.file.name
         )
         formData.append('nickname', nickname)
         formData.append('name', name)
         formData.append('last_name', last_name)
         const result = await fetchFile({
            method: 'PUT',
            path: 'user/',
            body: formData,
         })
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

// created public requests
export const postMyPublicRequest = createAsyncThunk(
   'news/postMyPublicRequest',
   async (publicData, { rejectWithValue }) => {
      const { title, text, short_desc, tag } = publicData.data
      try {
         const formData = new FormData()
         formData.append('image', publicData.file)
         formData.append('title', title)
         formData.append('text', text)
         formData.append('sort_desc', short_desc)
         formData.append('tag', tag)
         const result = await fetchFile({
            method: 'POST',
            path: `post/`,
            body: formData,
         })
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getMyPublicsRequest = createAsyncThunk(
   'news/getMyPublicsRequest',
   async (_, { rejectWithValue, getState }) => {
      const { userData } = getState().profile
      const newsData = getDataFromSessionStorage(PUBLIC_DATA_KEY)
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `post/`,
               params: {
                  author: userData.nickname,
               },
            })
            saveToSessionStorage(PUBLIC_DATA_KEY, result)
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
   myPublics: getDataFromSessionStorage(PUBLIC_DATA_KEY) || [],
   userData: getDataFromSessionStorage(USER_DATA_KEY) || null,
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

      [getUserData.pending]: setPending,
      [getUserData.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.userData = payload
         state.error = null
         state.isLoading = false
      },

      [getUserData.rejected]: setRejected,

      [getMyPublicsRequest.rejected]: setRejected,
      [postMyPublicRequest.rejected]: setRejected,
   },
})

export const userProfileActions = profileSlice.actions
export default profileSlice
