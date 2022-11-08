import '../App.css';
import { useWeather } from '../context/weatherContext';

import ForecastItem from './forecast-item';

function Forecasts() {
    const { weather } = useWeather();

    if (weather.state !== 'loading...') {
        return (
            <div className='row'>
                <div className='row weather-card'>
                    <div className="col-md-3 today-card rounded-start d-inline-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'green' }}>
                        <div className='flex-fill me-auto mt-3'>
                            <h1>Sunday</h1>
                            <h3>June 15</h3>
                        </div> 
                        <div className='flex-end me-auto mb-3'>
                            <h1>17C</h1>
                            <h2>Heavy cloud</h2>
                        </div>
                    </div>
                    <div className="col-md-9 rounded-end week-card pb-4 pt-3" style={{ backgroundColor: 'red' }}>
                        <div>
                            <div>Max Temp:</div>
                            <div>Min Temp:</div>
                            <div>Sunrise:</div>
                            <div>Sunset:</div>
                            <div>Max Wind Speed:</div>
                        </div>
                        <hr />
                        <div className="elements" >
                            <div className="row me-5">
                                {weather.time.map((t, index) => {
                                    if (index === 0) {
                                        return <div></div>
                                    }
                                    return ( 
                                        <div className="col-md-2 p-5">
                                            <ForecastItem key={index}
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
