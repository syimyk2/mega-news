/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
import { getDataFromLocalStorage } from '../utils/helpers/general'
import { KEY_AUTH, ROLES } from '../utils/constants/general'

const localData = getDataFromLocalStorage(KEY_AUTH) || {}

const initialState = {
   isAuthorized: localData.isAuthorized || false,
   token: localData.token || null,
   user: localData.user || null,
   status: '',
   isLoading: false,
   error: null,
   role: localData.role || null,
}
export const signUp = createAsyncThunk(
   'auth/signup',
   async (dataSignUp, { rejectWithValue }) => {
      try {
         return fetchApi({
            method: 'POST',
            path: '/registration',
            body: dataSignUp,
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
            path: '/login',
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
         state.role = null
      },
   },
   extraReducers: {
      //   [signUp.pending]: setPending,
      //   [signUp.fulfilled]: (state, { payload }) => {
      //      state.status = 'succes'
      //      state.role = ROLES.signup
      //      state.isAuthorized = true
      //      state.token = payload.data.token
      //      state.user = payload.data.user
      //      state.error = null
      //      state.isLoading = false
      //   },
      //   [signUp.rejected]: setRejected,
   },
})

export default authSlice
export const authAction = authSlice.actions
