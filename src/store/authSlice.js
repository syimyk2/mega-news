/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
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
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'

export const signUp = createAsyncThunk(
   'auth/signup',
   async ({ userData, reset }, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            method: 'POST',
            path: 'registration/',
            body: userData,
         })
         showSuccessMessage({
            message:
               'Successfully created account, conguratulations! Login with new account',
         })
         reset()
         return result
      } catch (error) {
         showErrorMessage({
            message: error.message,
         })
         return rejectWithValue(error)
      }
   }
)
export const signIn = createAsyncThunk(
   'auth/signin',
   async ({ submittedData, reset }, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            method: 'POST',
            path: 'login/',
            body: submittedData,
         })
         saveToSessionStorage(KEY_AUTH, result.token)
         showSuccessMessage({ message: 'Successfully logined' })
         reset()
         return result
      } catch (error) {
         showErrorMessage({
            message: error.message,
         })
         return rejectWithValue(error)
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
      [signUp.rejected]: setRejected,
      [signIn.rejected]: setRejected,
   },
})

export const authAction = authSlice.actions
export default authSlice
