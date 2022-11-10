import React from 'react'

import '../App.css'
//helpers
import getDayName from '../helpers/get-day-name'
import getDayOfMonth from '../helpers/get-day-of-month';
import getSymbolByWeatherCode from '../helpers/get-icon-by-weather-code'

function CurrentDay({ time, weatherCode, temperature2mMax, temperature2mMin }) {

    const { longDay } = getDayName(time, "en-US");

    const dayOfMonth = getDayOfMonth(time, "en-US");

    const averageTemp = (parseInt(temperature2mMax + temperature2mMin) / 2).toFixed();

    const { label } = getSymbolByWeatherCode(weatherCode);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
            marginLeft: '-30px',
        }}>
            <div className='flex-fill me-auto mt-3'>
                <h1 className='fw-bold'>{longDay}</h1>
                <h4>{dayOfMonth}th</h4>
            </div>
            <div className='flex-end me-auto mb-3'>
                <p className='fw-bold fs-1 mb-0'>{`${averageTemp}°C`}</p>
                <h4>{label}</h4>
            </div>
        </div>
    )
}

export default CurrentDay;