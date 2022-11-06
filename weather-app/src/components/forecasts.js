import '../App.css'
import { useWeather } from '../context/weatherContext'

import ForecastItem from './forecast-item';

function Forecasts() {
    const weather = useWeather();
    console.log(weather);

    if (weather.state !== 'loading...') {
        return (
            <div className="elements" >
                {weather.time.map((t, index) => {
                    return (
                        <ForecastItem key={index}
                            time={weather.time[index]}
                            weatherCode={weather.weathercode[index]}
                            temperature2mMax={weather.temperature_2m_max[index]}
                            temperature2mMin={weather.temperature_2m_min[index]}
                        />
                    )
                })}
            </div>
        )
    }
    else {
        return (<div className='loading'>LOADING...</div>)
    }
}

export default Forecasts;