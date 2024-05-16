import React, { useState } from 'react';

const NavbarLinks = () => {

  return (
    <div className="relative">
      <div className="hidden md:flex justify-center items-center bg-navColor h-10 rounded-b-2xl border-b-2 border-black">
        <a href="#Home"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Home</p></a>
        <a href="#Card"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Como Podemos Ajudar</p></a>
        <a href="#About"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Sobre Nós</p></a>
        <a href="#Contact"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Contato</p></a>
      </div>
    </div>
  );
};

export default NavbarLinks;
