import React from 'react'

import '../App.css'

import getDayName from '../helpers/get-day-name'
import getSymbolByWeatherCode from '../helpers/get-symbol-by-weather-code'

function CurrentDay({ time, weatherCode, temperature2mMax, temperature2mMin }) {


    const symbol = getSymbolByWeatherCode(weatherCode);
    const day = getDayName(time, "en-US");

    const temperatureMax = JSON.stringify(temperature2mMax);
    const temperatureMin = JSON.stringify(temperature2mMin);
    const averageTemp = (parseInt(temperatureMax + temperatureMin) / 2).toFixed()

    return (
        <div>
            <div className='flex-fill me-auto mt-3'>
                <h1>{day}</h1>
                <h4>{day}</h4>
            </div>
            <div className='flex-end me-auto mb-3'>
                <h1>{`${averageTemp}°C`}</h1>
                <h4>{symbol}</h4>
            </div>
        </div>
    )
}

export default CurrentDay;