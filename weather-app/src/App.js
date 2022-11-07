import './App.css';

import Forecasts from './components/forecasts';
import SelectLocation from './components/select-location';
import {WeatherProvider} from './context/weatherContext';


function App() {
  return (
    <div className="App">
        <WeatherProvider>
          <div className='container'>
            <SelectLocation/>
            <Forecasts/>
          </div>
        </WeatherProvider>
    </div>
  );
}

export default App;
