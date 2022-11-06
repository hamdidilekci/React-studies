import { useState } from 'react'
import useGeolocation from "react-hook-geolocation";

function Input() {
    const geolocation = useGeolocation();

    const [location, setLocation] = useState({
        latitude: 11.11,
        longitude: 22.22
    })

    const getLocation = (e) => {
        e.preventDefault();
        setLocation({
            latitude: geolocation.latitude,
            longitude: geolocation.longitude
        })
    }

    return !geolocation.error ? (
        <div>
            {
                <div className="input-group">
                    <div className='mb-2'>
                        <div className="input-group">
                            <input type="text" placeholder="latitude" className="form-control" value={location.latitude.toFixed(2)}/>
                            <input type="text" placeholder="longitude" className="form-control" value={location.longitude.toFixed(2)}/>
                            <button onClick={getLocation} className="input-group-text">O</button>
                            <button type="submit" className="input-group-text">Enter</button>
                        </div>
                    </div>  
                </div>
            }
        </div>
    ) : (
        <p>No geolocation, sorry.</p>
    );
}

export default Input;