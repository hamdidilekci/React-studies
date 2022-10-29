import { useEffect, useState } from 'react'

import {NavLink, Outlet} from 'react-router-dom'

import axios from 'axios';

function Users() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then(res => 
            setUsers(res.data)
        ).finally(() => setLoading(false));
    }, [] );

    return (
        <div>
            <h2> USERS </h2>
            {loading && <div>loading...</div> }
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <NavLink to={`${user.id}`}> {user.name} </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

export default Users