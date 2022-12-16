import React from 'react'
import { SignUp } from './components/login/SignUp'
import { Button } from './components/UI/Button'
import { Checkbox } from './components/UI/Checkbox'

function App() {
   return (
      <div className="App">
         <Button> Вход </Button>
         <Checkbox />
         <SignUp />
      </div>
   )
}

export default App
