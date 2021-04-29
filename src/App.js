import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Bulb from './Bulb'
import Input from './Input'
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter initial={0} />
        <Bulb />
        <div>
          <h5>
            Input: <Input />
          </h5>
        </div>
      </header>
    </div>
  )
}

export default App
