import React, { useState } from 'react';

const NavbarLinks = () => {

  return (
    <div className="relative">
      <div className="hidden sm:flex justify-center items-center bg-linkColor h-10 rounded-b-2xl border-b-2 border-black">
        <a href="#"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Home</p></a>
        <a href="#"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Como Podemos Ajudar</p></a>
        <a href="#"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Sobre Nós</p></a>
        <a href="#"><p className='mr-20 text-xl py-8 hover:text-white hover:underline'>Contato</p></a>
      </div>
    </div>
  );
};

export default NavbarLinks;
