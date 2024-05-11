// Navbar.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';

import logo from '../components/assets/symbol.png'
import title from '../components/assets/title.png'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
<div className='py-3 px-8 rounded-b-2xl md:rounded-none bg-navColor shadow-sm shadow-black'>
  <div className='flex items-center'>
    <GiHamburgerMenu className='text-2xl md:hidden' onClick={toggleSidebar} />
    <img src={title} alt="" className='m-auto h-8 md:h-12' />
    <img src={logo} alt="" className='md:mr-3 h-12 md:h-16 right-7 absolute' />
    {/* <h1 className='m-auto text-2xl'>Psicleta</h1> */}
  </div>
  <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
</div>

  );
}

export default Navbar;
