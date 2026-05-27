import React, { useEffect, useState } from 'react'

function About() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })

    }, [])

    return (
        <div>
            <h1>User List</h1>

            {
                users.map((user) => (
                    <div key={user.id} style={{
                        border: '1px solid gray',
                        margin: '10px',
                        padding: '10px'
                    }}>

                        <h3>
                            {user.name.firstname} {user.name.lastname}
                        </h3>

                        <p>Email: {user.email}</p>

                        <p>Username: {user.username}</p>

                        <p>Phone: {user.phone}</p>

                        <p>City: {user.address.city}</p>

                    </div>
                ))
            }

        </div>
    )
}

export default About