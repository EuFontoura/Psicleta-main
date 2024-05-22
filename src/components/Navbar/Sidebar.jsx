import React from 'react';
import logo from '../assets/symbol.png';
import SidebarContactButton from '../button/SidebarContactButton';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full bg-navColor text-white border-r-2 border-black/40 z-50 transition-all duration-300 ${isOpen ? 'w-32' : 'w-0 overflow-hidden'}`}
      style={{ width: isOpen ? '9rem' : '0' }}
    >
      <button onClick={closeSidebar} className="absolute top-0 right-0 m-4 text-white text-3xl">&times;</button>
      <div className={`mt-20 items-center justify-center mx-auto flex flex-col ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.3s' }}>
        <a href="#Home"><p className='mt-6'>Home</p></a>
        <a href="#Card"><p className='mt-6 text-center'>Como Podemos Ajudar</p></a>
        <a href="#About"><p className='mt-6'>Sobre Nós</p></a>
        <a href="#Contact"><p className='mt-6'>Contato</p></a>
      </div>
      <div className='m-auto flex justify-center items-end'>
        <SidebarContactButton />
        <img src={logo} alt="" className='h-12 absolute bottom-0 mb-4 left-0 right-0 mx-auto'/>
      </div>
    </div>
  );
}

export default Sidebar;
