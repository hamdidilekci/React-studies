import './App.css';

import Forecasts from './components/forecasts';
import Input from './components/select-location';
import {WeatherProvider} from './context/weatherContext';


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
