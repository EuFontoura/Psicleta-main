// Navbar.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
<div className='py-3 px-8 rounded-b-2xl bg-navColor'>
  <div className='flex items-center'>
    <GiHamburgerMenu className='text-2xl md:hidden' onClick={toggleSidebar} />
    <img src="https://placehold.co/175x50" alt="" className='m-auto' />
    <img src="https://placehold.co/50x50" alt="" className='m-right rounded-2xl' />
    {/* <h1 className='m-auto text-2xl'>Psicleta</h1> */}
  </div>
  <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
</div>

  );
}

export default Navbar;
