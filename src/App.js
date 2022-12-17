import React from 'react'
import { SignIn } from './components/login/SignIn'
// import { SignUp } from './components/login/SignUp'
// import { Button } from './components/UI/Button'
// import { Checkbox } from './components/UI/Checkbox'
import { Centered } from './styles/styles-for-positions/style'

function App() {
   return (
      <div className="App">
         <Centered>
            {/* <Button> Вход </Button>
            <Checkbox /> */}
            {/* <SignUp /> */}
            <SignIn />
         </Centered>
      </div>
   )
}

export default App
