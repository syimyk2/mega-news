/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/index'
import { getDataFromSessionStorage, logOut } from '../utils/helpers/general'
import { KEY_AUTH } from '../utils/constants/general'

const initialState = {
   isAuthorized: getDataFromSessionStorage(KEY_AUTH) || null,
   token: getDataFromSessionStorage(KEY_AUTH) || null,
   status: '',
   isLoading: false,
   error: null,
}
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
      [signUp.rejected]: setRejected,
      [signIn.rejected]: setRejected,
   },
})

export const authAction = authSlice.actions
export default authSlice
