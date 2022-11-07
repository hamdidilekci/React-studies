// Hooks
import useGeolocation from "react-hook-geolocation";

import {useWeather} from '../context/weatherContext'

function SelectLocation() {
    const { setLocation, currentLocation, setCurrentLocation } = useWeather();

    const geolocation = useGeolocation();
    const enterLocation = () => {
        setLocation( {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
        } )
    }
    
    const updateInput = () => {
        setCurrentLocation( {
            latitude: geolocation.latitude,
            longitude: geolocation.longitude
        } )
    }

    return !geolocation.error ? (
        <div>
            {
                <div className="input-group">
                    <div className='mb-2'>
                        <div className="input-group">
                            <input type="text" placeholder="latitude" className="form-control" value={currentLocation?.latitude.toFixed(2)}/>
                            <input type="text" placeholder="longitude" className="form-control" value={currentLocation?.longitude.toFixed(2)}/>
                            <button onClick={updateInput} className="input-group-text">O</button>
                            <button onClick={enterLocation} type="submit" className="input-group-text">Enter</button>
                        </div>
                    </div>  
                </div>
            }
        </div>
    ) : (
        <p>No geolocation, sorry.</p>
    );
}

export default SelectLocation;