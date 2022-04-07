import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Search = () => {
    const [searchText, setSearchText] = useState('')
    console.log(searchText);
    const [searchResult, setSearchResult] = useState([])
    console.log(searchResult);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText))
                setSearchResult(match)
            })
        console.log();
    }, [searchText])

    /*  useEffect(() => {
         fetch('data.json')
             .then(res => res.json())
             .then(data => {
                 const match = data.filter(d => d.title.includes(searchText));
                 setSearchResult(match);
             })
     }, [searchText])
     */

    const handleSearch = event => {
        setSearchText(event.target.value)
    }
    return (
        <div>
            <input onChange={handleSearch} type="text" placeholder='Search' />
            <div>
                {
                    searchResult.map(activity => <Activity key={activity._id} activity={activity} />)
                }
            </div>

        </div>
    );
};

export default Search;