// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-navColor text-white z-50 transition-all duration-300 ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
      <button onClick={closeSidebar} className="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
      <div className='mt-20 items-center justify-center mx-auto flex flex-col'>
      <a href="#"><p className='mt-6'>Home</p></a>
      <a href=""><p className='mt-6'>Sobre Nós</p></a>
      <a href=""><p className='mt-6'>Contato</p></a>
      </div>
      <div className='m-auto flex justify-center items-end'>
      <img src="https://placehold.co/50x50" alt="" className='m-right rounded-2xl absolute bottom-0 mb-4 left-0 right-0 mx-auto' />
      </div>
    </div>
  );
}

export default Sidebar;
