import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [location, setLocation] = useState({latitude : 38.03, longitude: 38.22});

    const [weather, setWeather] = useState({state : 'loading...'});

    useEffect(() => {
        async function getWeather() {
            await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto`)
            .then(res => setWeather(res.data.daily)) 
        }
        getWeather()
    },[location.latitude, location.longitude]);

    return (
        <WeatherContext.Provider value={ { weather, location, setLocation } }>{children}</WeatherContext.Provider>
    );
}

export const useWeather = () => useContext(WeatherContext);
