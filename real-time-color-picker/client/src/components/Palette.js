import React, { useState } from 'react'

import { send } from '../socketApi'

function Palette() {
  const [color, setColor] = useState('#0000')

  return (
    <div className='palette'>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button className='mt-2'onClick={(e) => send(color)} >Click</button>
    </div>
  )
}

export default Palette;