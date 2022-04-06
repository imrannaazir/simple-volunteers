import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center gap-3 py-6 shadow-lg mb-6 sticky top-0 bg-[#FAFAFA]'>
            <Link to='/home'>Home</Link>
            <Link to='/volunteers'>Volunteers</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;