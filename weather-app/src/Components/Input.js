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
                        <div class="input-group">
                            <input type="text" placeholder="latitude" class="form-control" />
                            <input type="text" placeholder="longitude" class="form-control" value={location.longitude.toFixed(2)}/>
                            <button onClick={getLocation} class="input-group-text">O</button>
                            <button class="input-group-text">Enter</button>
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