import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import App from './App'
import store from './store'
import { Centered } from './styles/styles-for-positions/style'

ReactDOM.render(
   <Provider store={store}>
      <Suspense
         fallback={
            <Centered>
               <div>Loading...</div>
            </Centered>
         }
      >
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Suspense>
   </Provider>,
   document.getElementById('root')
)
