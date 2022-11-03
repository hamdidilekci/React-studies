import '../App.css'
import { useWeather } from '../Context/WeatherContext'

function Forecasts() {
    const weather = useWeather();

    let day;
    let weatherCode;
    let temperatureMax;
    let temperatureMin;

    if (weather.state !== 'loading...') {
        
        let dateStr = weather.time[0];

        function getDayName(dateStr, locale) {
            let date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });
        }

        day = getDayName(dateStr, "en-US")
        weatherCode = JSON.stringify(weather.weathercode[0]);
        temperatureMax = JSON.stringify(weather.temperature_2m_max[0]);
        temperatureMin = JSON.stringify(weather.temperature_2m_min[0]);

        return (
            <div>
                <div className='list'>
                    <span>
                        {day}
                    </span>
                    <br />
                    <span>
                        {weatherCode}
                    </span>
                    <div>
                        <span>
                            {`${temperatureMax} °C`}
                        </span>
                        <span>
                            {`${temperatureMin} °C`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<div>LOADING...</div>)
    }
}

export default Forecasts