/* eslint-disable no-case-declarations */
import { BASE_URL } from '../../api'
import { KEY_AUTH } from '../constants/general'
import initphoto from '../../assets/images/photo.png'

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

export const getImageUrl = (imgPath) => {
   return imgPath ? `${BASE_URL}${imgPath}` : initphoto
}

// input helpers
export const changeInputHandler = (
   { target: { value, name } },
   setData,
   data
) => {
   if (name === 'location') setData({ ...data, [name]: { id: value } })
   else setData({ ...data, [name]: value })
}

export const changeInput = ({ target: { value, name } }, filter, setFilter) => {
   switch (value !== '') {
      case true:
         setFilter({ ...filter, [name]: value })
         break
      default:
         const newFilter = { ...filter }
         delete newFilter[name]
         setFilter({ ...newFilter })
         break
   }
}
