/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api'
import { NEWS_DATA_KEY } from '../utils/constants/general'
import {
   getDataFromSessionStorage,
   saveToSessionStorage,
} from '../utils/helpers/general'

export const getNewsList = createAsyncThunk(
   'news/getNewsList',
   async (_, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            method: 'GET',
            path: `post/`,
         })
         saveToSessionStorage(NEWS_DATA_KEY, result)
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getNewsDetail = createAsyncThunk(
   'news/getNewsDetail',
   async (newsId, { rejectWithValue }) => {
      const newsData = getDataFromSessionStorage('_NEWS_DETAIL_KEY')
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `post/${newsId}/`,
            })
            saveToSessionStorage('_NEWS_DETAIL_KEY', result)
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
export const getFavoriteNews = createAsyncThunk(
   'news/getFavoriteNews',
   async (_, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            method: 'GET',
            path: `like/`,
         })
         saveToSessionStorage('_FAVORITE_NEWS_KEY', result)
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

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

// comment requests
export const addCommentRequest = createAsyncThunk(
   'news/addCommentRequest',
   async (commentData, { rejectWithValue, dispatch }) => {
      try {
         const result = await fetchApi({
            method: 'POST',
            path: `comment/`,
            body: commentData,
         })
         dispatch(getNewsDetail(commentData.postId))
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
   newslist: getDataFromSessionStorage(NEWS_DATA_KEY) || [],
   newsDetail: getDataFromSessionStorage('_NEWS_DETAIL_KEY') || {},
   favoriteNews: getDataFromSessionStorage('_FAVORITE_NEWS_KEY') || [],
   status: '',
   isLoading: false,
   error: null,
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
      },
      [getNewsList.rejected]: setRejected,

      [getNewsDetail.pending]: setPending,
      [getNewsDetail.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.newsDetail = payload
      },
      [getNewsDetail.rejected]: setRejected,

      [getFavoriteNews.pending]: setPending,
      [getFavoriteNews.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.favoriteNews = payload
      },
      [getFavoriteNews.rejected]: setRejected,
   },
})

export const userProfileActions = newsSlice.actions
export default newsSlice
