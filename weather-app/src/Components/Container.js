import React from 'react'

import Header from './Header'
import Input from './Input'
import Forecasts from './Forecasts'

function Container() {

    return (
        <div className='container'>
            <Header />
            <hr />
            <Input />
            <hr />
            <Forecasts />
        </div>
    )
}

export default Container;