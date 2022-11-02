import '../App.css'
import { useWeather } from '../Context/WeatherContext'

function Forecasts() {
    const weather = useWeather();

    function getDayName(dateStr, locale)
    {
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }
    let dateStr = weather?.daily?.time[0];
    let day = getDayName(dateStr, "en-US")

    let weatherCode = JSON.stringify(weather?.daily?.weathercode[0]);
    let temperatureMax = JSON.stringify(weather?.daily?.temperature_2m_max[0]);
    let temperatureMin = JSON.stringify(weather?.daily?.temperature_2m_min[0]);

    return (
        <div>
            <div className='list'>
                <li>
                    {day}
                </li>
                <li>
                    {weatherCode}
                </li>
                <li>
                    {temperatureMax}
                </li>
                <li>
                    {temperatureMin}
                </li>
            </div>
        </div>
    )
}

export default Forecasts