import './App.css';

import Forecasts from './components/Forecasts';
import Input from './components/Input';
import {WeatherProvider} from './context/WeatherContext';


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
