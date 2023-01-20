/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './App'
import Spinner from './components/UI/loader/Spinner'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <Suspense fallback={<Spinner />}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Suspense>
   </Provider>
)
