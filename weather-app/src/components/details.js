import React from 'react'
// helpers
import getLocaleHours from '../helpers/get-locale-hours-minutes';
// CSS
import '../App.css'

function Details({ temperature2mMax, temperature2mMin, sunrise, sunset, windspeed10mMax }) {
    
    const temperatureMax = JSON.stringify(temperature2mMax);
    const temperatureMin = JSON.stringify(temperature2mMin);

    let sunRise = getLocaleHours(sunrise, "en-US");
    let sunSet = getLocaleHours(sunset, "en-US");

    const maxWindSpeed = (windspeed10mMax).toFixed()

    return (
        <div className='details'>
            <h4>MAX TEMP
                <span className='float-end'>{temperatureMax}</span>
            </h4>
            <h4>MİN TEMP
                <span className='float-end'>{temperatureMin}</span>
            </h4>
            <h4>SUNRİSE
                <span className='float-end'>{sunRise}
                </span>
            </h4>
            <h4>SUNSET
                <span className='float-end'>{sunSet}</span>
            </h4>
            <h4>MAX WİND-SPEED
                <span className='float-end'>{maxWindSpeed}</span>
            </h4>
        </div>
    )
}
export default Details;