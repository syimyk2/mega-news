/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api'
import { NEWS_DATA_KEY } from '../utils/constants/general'
import {
   getDataFromLocalStorage,
   saveToLocalStorage,
} from '../utils/helpers/general'

const initialState = {
   newslist: getDataFromLocalStorage(NEWS_DATA_KEY) || [],
   newsDetail: getDataFromLocalStorage('_NEWS_DETAIL_KEY') || {},
   favoriteNews: getDataFromLocalStorage('_FAVORITE_NEWS_KEY') || [],
   status: '',
   isLoading: false,
   error: null,
}

export const getNewsList = createAsyncThunk(
   'news/getNewsList',
   async (_, { rejectWithValue }) => {
      const newsData = getDataFromLocalStorage(NEWS_DATA_KEY)
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `post/`,
            })
            saveToLocalStorage(NEWS_DATA_KEY, result)
            return result
         } catch (error) {
            rejectWithValue(error)
         }
      } else {
         return newsData
      }
   }
)

export const getNewsDetail = createAsyncThunk(
   'news/getNewsDetail',
   async (newsId, { rejectWithValue }) => {
      const newsData = getDataFromLocalStorage('_NEWS_DETAIL_KEY')
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `post/${newsId}/`,
            })
            saveToLocalStorage('_NEWS_DETAIL_KEY', result)
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
      const newsData = getDataFromLocalStorage('_FAVORITE_NEWS_KEY')
      if (!newsData) {
         try {
            const result = await fetchApi({
               method: 'GET',
               path: `like/`,
            })
            saveToLocalStorage('_FAVORITE_NEWS_KEY', result)
            return result
         } catch (error) {
            rejectWithValue(error)
         }
      } else {
         return newsData
      }
   }
)

export const setLikeNews = createAsyncThunk(
   'news/setLikeNews',
   async (postId, { rejectWithValue }) => {
      // const newsData = getDataFromLocalStorage('_FAVORITE_NEWS_KEY')
      // if (!newsData) {
      try {
         const result = await fetchApi({
            method: 'POST',
            path: `like/`,
            body: postId,
         })
         // saveToLocalStorage('_FAVORITE_NEWS_KEY', result)
         return result
      } catch (error) {
         rejectWithValue(error)
      }
      // } else {
      //    return newsData
      // }
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

      [getNewsDetail.pending]: setPending,
      [getNewsDetail.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.newsDetail = payload
         console.log('detail', payload)
      },
      [getNewsDetail.rejected]: setRejected,

      [getFavoriteNews.pending]: setPending,
      [getFavoriteNews.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.error = null
         state.isLoading = false
         state.favoriteNews = payload
         console.log('favNews', payload)
      },
      [getFavoriteNews.rejected]: setRejected,
   },
})

export const userProfileActions = newsSlice.actions
export default newsSlice
