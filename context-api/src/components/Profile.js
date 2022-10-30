import { useState } from 'react';

import { useUser } from '../context/UserContext';

function Profile() {
    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, name: 'H.Dilekçi', bio: 'lorem Ipsum Dolor Sit Amet.' });
            setLoading(false);
        }, 1500);
    };

    const handleLogOut = () => {
        setUser(null);
    }


    return (
        <div>
            {!user && (
                <button onClick={handleLogin}>
                    {loading ? 'loading...' : 'Login'}
                </button>
            )}

            <br />
            <code>{JSON.stringify(user)}</code>
            <br />
            {user && <button onClick={handleLogOut}>Logout</button>}
        </div>
    )
}

export default Profile