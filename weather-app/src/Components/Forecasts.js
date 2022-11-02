import { useWeather } from '../Context/WeatherContext'

function Forecasts() {
    const weather = useWeather();

    let day = JSON.stringify(weather?.daily?.time);
    let weatherCode = JSON.stringify(weather?.daily?.weathercode);
    let temperatureMax = JSON.stringify(weather?.daily?.temperature_2m_max);
    let temperatureMin = JSON.stringify(weather?.daily?.temperature_2m_min);

    return (
        <div>
            <div>
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