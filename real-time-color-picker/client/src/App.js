import './App.css';

import React, { useEffect } from 'react'
import Palette from './components/Palette';

import { init } from './socketApi'

function App() {
  useEffect( () => {
    init();
  }, [])
  return (
    <div className='App'>
      <Palette />
    </div>
  )
}

export default App