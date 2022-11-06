import './App.css';

import Forecasts from './Components/Forecasts';
import Input from './Components/Input';
import {WeatherProvider} from './Context/WeatherContext';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <div className='container'>
          <Input/>
          <Forecasts/>
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
