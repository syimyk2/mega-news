/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/index'
import {
   getDataFromSessionStorage,
   logOut,
   saveToSessionStorage,
} from '../utils/helpers/general'
import { KEY_AUTH } from '../utils/constants/general'

export const signUp = createAsyncThunk(
   'auth/signup',
   async (dataSignUp, { rejectWithValue }) => {
      try {
         return fetchApi({
            method: 'POST',
            path: 'registration/',
            body: dataSignUp.userData,
         })
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const signIn = createAsyncThunk(
   'auth/signin',
   async (dataSignUp, { rejectWithValue }) => {
      try {
         return fetchApi({
            method: 'POST',
            path: 'login/',
            body: dataSignUp,
         })
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getUserData = createAsyncThunk(
   'auth/getUserData',
   async (key, { rejectWithValue }) => {
      const userData = getDataFromSessionStorage('_USER_DATA')
      if (!userData && !key) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: 'user/',
            })
            saveToSessionStorage('_USER_DATA', result)
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
         const result = await fetchApi({
            method: 'PUT',
            path: 'user/',
            body: newUserData,
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
   isAuthorized: getDataFromSessionStorage(KEY_AUTH) || null,
   token: getDataFromSessionStorage(KEY_AUTH) || null,
   user: getDataFromSessionStorage('_USER_DATA') || null,
   status: '',
   isLoading: false,
   error: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signOut(state) {
         state.isAuthorized = false
         state.token = null
         state.user = null
         logOut()
      },
   },
   extraReducers: {
      [signUp.pending]: setPending,
      [signUp.fulfilled]: (state) => {
         state.status = 'succes'
         state.isAuthorized = true
         state.error = null
         state.isLoading = false
      },
      [signIn.pending]: setPending,
      [signIn.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.token = payload.token
         state.isAuthorized = !!payload.token
         state.error = null
         state.isLoading = false
      },
      [getUserData.pending]: setPending,
      [getUserData.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.user = payload
         state.error = null
         state.isLoading = false
      },

      [getUserData.rejected]: setRejected,
      [signUp.rejected]: setRejected,
      [signIn.rejected]: setRejected,
   },
})

export const authAction = authSlice.actions
export default authSlice
