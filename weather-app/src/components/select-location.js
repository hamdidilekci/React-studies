import { useState } from 'react';
// Hooks
import useGeolocation from 'react-hook-geolocation';
// context
import { useWeather } from '../context/weatherContext';
// icon
import LocationMark from '../icons/location-mark';

function SelectLocation() {
    const { location, setLocation } = useWeather();
    const [currentLocation, setCurrentLocation] = useState({ latitude: location.latitude, longitude: location.longitude });

    const geolocation = useGeolocation();
    
    const updateInput = () => {
        setCurrentLocation({
            latitude: geolocation.latitude,
            longitude: geolocation.longitude
        });
    };
    
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let newLocation = {...currentLocation}
        newLocation[name] = +value
        
        setCurrentLocation(newLocation);
    };
    
    const enterLocation = () => {
        setLocation({
            latitude: currentLocation?.latitude,
            longitude: currentLocation?.longitude
        });
    };
    
    return !geolocation.error ? (
        <div>
            {
                <div className="input-group">
                    <div className='mb-2'>
                        <div className="input-group">
                            <input 
                                value={currentLocation?.latitude?.toFixed(2)}
                                onChange={ handleInputChange } 
                                name='latitude'
                                type="text" 
                                placeholder="latitude" 
                                className="form-control" 
                            />
                            <input 
                                value={currentLocation?.longitude?.toFixed(2)}
                                onChange={ handleInputChange } 
                                name='longitude'
                                type="text" 
                                placeholder="longitude" 
                                className="form-control" 
                            />
                            <button onClick={updateInput} className="input-group-text"><LocationMark/></button>
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
