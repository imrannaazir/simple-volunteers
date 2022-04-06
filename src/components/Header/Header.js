import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faFontAwesome, } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='gap-3 py-6 shadow-lg mb-6 sticky top-0 bg-[#FAFAFA]'>


            <div className='flex justify-between items-center md:px-6'>

                <span className=' text-6xl'>
                    <FontAwesomeIcon icon={faFontAwesome} />
                </span>

                <div className={`md:flex absolute md:static top-24 gap-3 md:w-auto  w-full bg-[#fafafa] ${open ? 'hidden' : 'block'} leading-10 ease-linear duration-1000 shadow-lg md:shadow-none`}>
                    <p> <Link to='/home'>Home</Link></p>
                    <p><Link to='/volunteers'>Volunteers</Link></p>
                    <p> <Link to='/about'>About</Link></p>
                </div>


            </div>

            <span onClick={() => setOpen(!open)} className=' text-2xl right-6 top-9 absolute md:hidden'>
                {open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
            </span>

        </div>
    );
};

export default Header;