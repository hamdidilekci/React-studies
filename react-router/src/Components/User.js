import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => 
            setUser(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, [id])

    return (
        <div>
            <h1>User details</h1>
            {loading && <div>loading...</div> }
            {!loading && <code> {JSON.stringify(user)}</code>}
            <br />
            <br />
            <NavLink className={'next'} to={`/users/${parseInt(id)+1}`}>
                Next User ({parseInt(id)+1})
            </NavLink>
        </div>
    );
}

export default User