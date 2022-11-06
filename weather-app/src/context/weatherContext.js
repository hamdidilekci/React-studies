import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';


const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    
    const [weather, setWeather] = useState({state : 'loading...'});

    useEffect(() => {
        async function getWeather() {
            await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.99&longitude=28.89&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto')
            .then(res => setWeather(res.data.daily)) 
        }
        getWeather()
    },[]);

    return (
        <WeatherContext.Provider value={weather}>{children}</WeatherContext.Provider>
    );
}

export const useWeather = () => useContext(WeatherContext);