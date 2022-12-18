import React from 'react'
import { SignIn } from './components/login/SignIn'
import Layout from './layout'
// import { Header } from './layout/Header'
// import { SignUp } from './components/login/SignUp'
// import { Button } from './components/UI/Button'
// import { Checkbox } from './components/UI/Checkbox'
import { Centered } from './styles/styles-for-positions/style'

function App() {
   return (
      <div className="App">
         <Layout>
            <Centered>
               {/* <Button> Вход </Button>
            <Checkbox /> */}
               {/* <SignUp /> */}
               <SignIn />
            </Centered>
         </Layout>
      </div>
   )
}

export default App
