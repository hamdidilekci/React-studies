import './App.css';

import Container from './Components/Container';
import {WeatherProvider} from './Context/WeatherContext';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Container/>
      </WeatherProvider>
    </div>
  );
}

export default App;
