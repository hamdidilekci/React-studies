import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
// import axios from 'axios'

function App() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.99&longitude=28.89&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto')
      setWeather(response)
    }
    getWeather()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {
          JSON.stringify(weather)
        }
      </div>
    </div>
  );
}

export default App;
