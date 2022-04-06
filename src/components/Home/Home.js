import React from 'react';
import { useEffect, useState } from 'react';
const Home = () => {
    const [volunteers, setVolunteers] = useState(0)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <h1>Volunteers - {volunteers.length}</h1>

        </div>
    );
};

export default Home;