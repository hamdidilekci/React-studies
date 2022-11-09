import React from 'react'

import '../App.css'

import getSymbolByWeatherCode from '../helpers/get-symbol-by-weather-code'
import getDayName from '../helpers/get-day-name'

function ForecastItem({time, weatherCode, temperature2mMax, temperature2mMin}) {

    const symbol = getSymbolByWeatherCode(weatherCode);

    const day = getDayName(time, "en-US");

    const temperatureMax = JSON.stringify(temperature2mMax);
    const temperatureMin = JSON.stringify(temperature2mMin);
    const averageTemp = (parseInt( temperatureMax + temperatureMin )/2).toFixed()

    return (
        <div>
            <div className="card-img-top d-flex justify-content-center">
                {symbol}
            </div>
            <div className="card-body">
                <span className='day-name'>{day}</span>
                <span className="card-text d-flex justify-content-center fw-bold">
                    {`${averageTemp}°`}
                </span>
            </div>
        </div>
    )
}
export default ForecastItem;