import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App({ items }) {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <p>{items} Abdullah</p>
        </div>
    </>
  )
}

export default App
