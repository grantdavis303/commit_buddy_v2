import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextField from '@mui/material/TextField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Commit Buddy </h1>
      <h2> Version 2.0 </h2>
    </>
  )
}

export default App
