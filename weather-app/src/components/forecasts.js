import '../App.css';
import { useWeather } from '../context/weatherContext';

import CurrentDay from './current-day';
import Details from './details';
import ForecastItem from './forecast-item';


function Forecasts() {
    const { weather } = useWeather();

    if (weather.state !== 'loading...') {
        return (
            <div className='row'>
                <div className='row weather-card'>
                    <div  className="col-md-3 rounded-start today-card ">
                        {weather.time.map((t, index) => {
                            if (index !== 0) {
                                return <div key={index}></div>
                            }
                            return (
                                <div key={index}>
                                    <CurrentDay
                                        time={weather.time[0]}
                                        weatherCode={weather.weathercode[0]}
                                        temperature2mMax={weather.temperature_2m_max[0]}
                                        temperature2mMin={weather.temperature_2m_min[0]}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-9 rounded-end week-card pb-4 pt-3">
                        <div>
                            {weather.time.map((t, index) => {
                                if (index !== 0) {
                                    return <div key={index}></div>
                                }
                                return (
                                    <div key={index}>
                                        <Details
                                            temperature2mMax={weather.temperature_2m_max[index]}
                                            temperature2mMin={weather.temperature_2m_min[index]}
                                            sunrise={weather.sunrise[index]}
                                            sunset={weather.sunset[index]}
                                            windspeed10mMax={weather.windspeed_10m_max[index]}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <div className="elements rounded p-2" >
                            <div className="row">
                                {weather.time.map((t, index) => {
                                    if (index === 0) {
                                        return <div key={index}></div>
                                    }
                                    return (
                                        <div key={index} className="col-md-2 d-flex flex-row justify-content-center">
                                            <ForecastItem
                                                time={weather.time[index]}
                                                weatherCode={weather.weathercode[index]}
                                                temperature2mMax={weather.temperature_2m_max[index]}
                                                temperature2mMin={weather.temperature_2m_min[index]}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (<div className='loading'>LOADING...</div>);
}

export default Forecasts;
