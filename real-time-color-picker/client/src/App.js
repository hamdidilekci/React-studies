import './App.css';

import React, { useEffect, useState } from 'react'
import Palette from './components/Palette';

import { init, subscribe } from './socketApi'

function App() {
  const [activeColor, setActiveColor] = useState('#282c34');

  useEffect(() => {
    init();           // run socket.io
    
    subscribe((color) => {  
      setActiveColor(color);    // set choosen color to activeColor 
    });
  }, [])

  return (
    <div className='App' style={{backgroundColor: activeColor}}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor}/>
    </div>
  )
}

export default App;