// Navbar.js
import React from 'react';

import logo from '../../assets/symbol.png';
import title from '../../assets/title.png';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='fixed md:static top-0 left-0 w-full py-3 px-8 rounded-b-2xl md:rounded-none bg-navColor shadow-sm shadow-black z-50'>
      <div className='flex items-center'>
        < Link to="/">
        <FaArrowLeft  className='text-2xl'/>
        </Link>
        <img src={title} alt="Title" className='m-auto h-8 md:h-12' />
        <img src={logo} alt="Logo" className='md:mr-3 h-12 md:h-16 right-7 absolute' />
      </div>
    </div>
  );
}

export default Navbar;
