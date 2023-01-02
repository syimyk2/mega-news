import { KEY_AUTH } from '../constants/general'

/* eslint-disable no-alert */
// session storage helpers
export const saveToSessionStorage = (key, data) => {
   try {
      sessionStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      window.alert(error.message)
   }
}
export const getDataFromSessionStorage = (key) => {
   try {
      return JSON.parse(sessionStorage.getItem(key))
   } catch (error) {
      return window.alert(error.message)
   }
}
export const removeWithKeyFromSessionStorage = (key) => {
   sessionStorage.removeItem(key)
}

export const logOut = () => {
   removeWithKeyFromSessionStorage(KEY_AUTH)
   window.location.reload()
}
