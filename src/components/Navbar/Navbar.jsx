// Navbar.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';

import logo from '../assets/symbol.png';
import title from '../assets/title.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className='fixed md:static top-0 left-0 w-full py-3 px-8 rounded-b-2xl md:rounded-none bg-navColor shadow-sm shadow-black z-50'>
      <div className='flex items-center'>
        <GiHamburgerMenu className='text-2xl md:hidden' onClick={toggleSidebar} />
        <img src={title} alt="Title" className='m-auto h-8 md:h-12' />
        <img src={logo} alt="Logo" className='md:mr-3 h-12 md:h-16 right-7 absolute' />
      </div>
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Navbar;
