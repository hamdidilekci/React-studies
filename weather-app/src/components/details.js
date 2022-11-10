import React from 'react'
// helpers
import getLocaleHours from '../helpers/get-locale-hours-minutes';
// CSS
import '../App.css'

function Details({ temperature2mMax, temperature2mMin, sunrise, sunset, windspeed10mMax }) {

    let sunRise = getLocaleHours(sunrise, "en-US");
    let sunSet = getLocaleHours(sunset, "en-US");

    const maxWindSpeed = (windspeed10mMax).toFixed()

    return (
        <div>
            <h4>MAX TEMP
                <h5 className='float-end'>{temperature2mMax}°C</h5>
            </h4>
            <h4>MIN TEMP
                <h5 className='float-end'>{temperature2mMin}°C</h5>
            </h4>
            <h4>SUNRISE
                <h5 className='float-end'>{sunRise}
                </h5>
            </h4>
            <h4>SUNSET
                <h5 className='float-end'>{sunSet}</h5>
            </h4>
            <h4>MAX WIND-SPEED
                <h5 className='float-end'>{maxWindSpeed} km/h</h5>
            </h4>
        </div>
    )
}
export default Details;