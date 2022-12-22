import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
/* eslint-disable no-undef */
const userProfileSlice = createSlice({
   name: 'userProfile',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const userProfileActions = userProfileSlice.actions
export default userProfileSlice
