import React from 'react'
import { Button } from './components/UI/Button'

function App() {
   return (
      <div style={{ width: '1000px', padding: '50px 500px' }} className="App">
         <Button onClick={() => alert('bismillah')}> Вход </Button>
      </div>
   )
}

export default App
