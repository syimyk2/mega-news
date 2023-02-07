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
import { Centered } from './styles/styles-for-positions/style'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <Suspense fallback={<Centered> <Spinner dark size={50} />
         </Centered>}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Suspense>
   </Provider>
)
