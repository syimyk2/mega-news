/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/no-cycle
import store from '../store'

export const BASE_URL = 'https://megalab.pythonanywhere.com'

export const fetchApi = async (options) => {
   const { token } = store.getState().auth
   try {
      let { path } = options

      const requestOptions = {
         method: options.method || 'GET',
         headers: token
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Token ${token}`,
              }
            : { 'Content-Type': 'application/json' },
      }

      if (options.method !== 'GET') {
         requestOptions.body = JSON.stringify(options.body || {})
      }

      if (options.params) {
         const queryParamsStringValue = Object.keys(options.params)
            .map((paramKey) => `${paramKey}=${options.params[paramKey]}`)
            .join('&')
         path = `${path}?${queryParamsStringValue}`
      }

      const response =
         options?.noBaseUrl && options?.noBaseUrl
            ? await fetch(`${path}`, requestOptions)
            : await fetch(`${BASE_URL}/${path}`, requestOptions)
      const data = await response.json()

      if (!response.ok) {
         let errorMessage = 'Something went wrong'
         if (data && data.message) {
            errorMessage = data
         } else {
            const message = Object.keys(data)
            errorMessage = data[message][0]
         }
         throw new Error(errorMessage)
      }
      return data
   } catch (e) {
      throw new Error(e.message)
   }
}

export const fetchFile = async (options) => {
   const { token } = store.getState().auth
   try {
      const requestOptions = {
         method: options.method || 'GET',
         headers: { Authorization: `Token ${token}` },
      }

      if (options.method !== 'GET') {
         requestOptions.body = options.body || {}
      }

      const response = await fetch(
         `${BASE_URL}/${options.path}`,
         requestOptions
      )
      const data = await response.json()

      if (!response.ok) {
         let errorMessage = 'Something went wrong'
         if (data && data.message) {
            errorMessage = data.message
         }
         throw new Error(errorMessage)
      }

      return data
   } catch (e) {
      throw new Error(e.message)
   }
}
