import React from 'react';

const Activity = ({ activity: { title, img } }) => {
    console.log(img);

    return (
        <div className=' shadow-lg rounded-md bg-white py-6'>
            <img className='w-[90%] mx-auto rounded-md ' src={img} alt="" />
            <p className='text-xl font-semibold my-6'>{title}</p>
            <button className=' bg-sky-400 px-6 py-2 rounded-full text-white hover:bg-white hover:border-2 hover:border-sky-400 hover:text-sky-400'>Learn More</button>

        </div>
    );
};

export default Activity;