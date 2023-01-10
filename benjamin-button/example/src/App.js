import React from 'React'
import { useState }  from 'react';

import {Button} from 'benjamin-button';
import 'benjamin-button/dist/index.css';

const App = () => {
  const types = ['Primary', 'Dashed', 'Text', 'Link', 'Default'];

  const [buttonName, setButtonName] = useState(types[0]);
  
  const handleChangeType = () => {
    let ind = types.indexOf(buttonName)
    ind++
    if(ind === 5) {
      ind = 0
    }
    setButtonName(types[ind])
  }

  return (
    <div>
      <Button 
        className={buttonName} 
        text={buttonName} 
        onClick={handleChangeType} 
      />
    </div>
  )

};

export default App;
