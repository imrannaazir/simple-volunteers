import React from 'react';
import { useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers'
import Activity from '../Activity/Activity';
const Home = () => {
    const [volunteers] = useVolunteers()
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = event => {
        const searchText = event.target.value
        const match = volunteers.filter(volunteer => volunteer.title.toLowerCase().includes(searchText))
        setSearchResult(match);

    }
    return (
        <div>
            <h1>Volunteers - {volunteers.length}</h1>
            <section>
                <input onChange={handleSearch} className=' border-2 border-sky-400' type="text" name="" id="" />
                <button>Search</button>
            </section>
            <div className='grid w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    searchResult.map(activity => <Activity key={activity._id} activity={activity} />)
                }
            </div>

        </div>
    );
};

export default Home;