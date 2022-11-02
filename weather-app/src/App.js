import './App.css';

import Forecasts from './Components/Forecasts';
import {WeatherProvider} from './Context/WeatherContext';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Forecasts/>
      </WeatherProvider>
    </div>
  );
}

export default App;
