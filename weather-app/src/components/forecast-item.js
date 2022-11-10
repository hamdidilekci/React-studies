import React from 'react'

import '../App.css'

import getIconByWeatherCode from '../helpers/get-icon-by-weather-code'
import getDayName from '../helpers/get-day-name'

function ForecastItem({ time, weatherCode, temperature2mMax, temperature2mMin }) {

    const {icon} = getIconByWeatherCode(weatherCode);

    const {shortDay} = getDayName(time, "en-US");

    const averageTemp = (parseInt(temperature2mMax + temperature2mMin) / 2).toFixed()

    return (
        <div>
            <div className="card-img-top d-flex justify-content-center">
                {icon}
            </div>
            <div className="card-body">
                <h5 className='day-name'>{shortDay}</h5>
                <h5 className="card-text d-flex justify-content-center fw-bold">
                    {`${averageTemp}°`}
                </h5>
            </div>
        </div>
    )
}
export default ForecastItem;