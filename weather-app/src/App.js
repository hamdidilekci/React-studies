import './App.css';

import Forecasts from './temp/forecasts';
import Input from './temp/select-location';
import {WeatherProvider} from './tempContext/weatherContext';


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
