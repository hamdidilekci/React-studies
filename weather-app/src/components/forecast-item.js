import React from 'react'

import '../App.css'

import getSymbolByWeatherCode from '../helpers/get-symbol-by-weather-code'
import getDayName from '../helpers/get-day-name'

function ForecastItem({time, weatherCode, temperature2mMax, temperature2mMin}) {

    const [symbol] = getSymbolByWeatherCode(weatherCode);

    const day = getDayName(time, "en-US");

    const averageTemp = (parseInt( temperature2mMax + temperature2mMax )/2).toFixed()

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