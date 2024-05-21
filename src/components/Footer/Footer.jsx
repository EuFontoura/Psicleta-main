import React from 'react';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-2 border-black/40 text-textColor'>
      <div className='flex justify-center mx-auto text-4xl mt-8'>
        <a href="#" className=''><FaInstagram /></a>
      </div>
      <div className='flex flex-col sm:flex-row mx-auto justify-center my-4'>
        <a href="#Home"><p className='sm:mr-20 md:text-xl hover:text-white hover:underline text-center sm:text-left'>Home</p></a>
        <a href="#Card"><p className='sm:mr-20 md:text-xl hover:text-white hover:underline text-center sm:text-left'>Como Podemos Ajudar</p></a>
        <a href="#About"><p className='sm:mr-20 md:text-xl hover:text-white hover:underline text-center sm:text-left'>Sobre Nós</p></a>
        <a href="#Contact"><p className='sm:mr-20 md:text-xl hover:text-white hover:underline text-center sm:text-left'>Contato</p></a>
      </div>
      <div className='flex justify-center mx-auto'>Copyright © 2024 - Todos os Direitos Reservados</div>
    </div>
  );
};

export default Footer;
