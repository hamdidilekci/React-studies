import React from 'react'

import '../App.css'

import getSymbolByWeatherCode from '../get-symbol-by-weather-code'

function ForecastItem({time, weatherCode, temperature2mMax, temperature2mMin}) {

    const symbol = getSymbolByWeatherCode(weatherCode);

    function getDayName(time, locale) {
        let date = new Date(time);
        return date.toLocaleDateString(locale, { weekday: 'long' });
    };
    const day = getDayName(time, "en-US");

    const temperatureMax = JSON.stringify(temperature2mMax);
    const temperatureMin = JSON.stringify(temperature2mMin);

    return (
        <span className='m-2 p-0' style={{minWidth: '100px'}}>
            <p><strong>{day}</strong></p>
            <div className="card-img-top" style={{minHeight: '100px'}}>
                {symbol}
            </div>
            <div className="card-body">
                <p className="card-text">
                    <strong><span>Max {`${temperatureMax}°`}</span></strong>
                    <br />
                    <strong><span>Min {`${temperatureMin}°`}</span></strong>
                </p>
            </div>
        </span>
    )
}
export default ForecastItem;