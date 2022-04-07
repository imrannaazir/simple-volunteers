import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [volunteers] = useVolunteers()
    return (
        <div>
            <div className='grid w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-20'> {
                volunteers.map(activity => <Activity key={activity._id} activity={activity} />)
            }
            </div>

        </div>
    );
};

export default Volunteers;
