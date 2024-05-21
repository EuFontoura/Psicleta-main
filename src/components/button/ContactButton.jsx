import React from 'react'

import './button.css'
import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <div>
      <Link to="/form">
      <button className='justify-center flex m-auto my-8 text-xl md:text-4xl bg-btnColor text-textColor py-1 px-2 md:py-2 md:px-4 rounded transition duration-300 btn'>Entre em contato conosco e agende sua consulta!</button>
      </Link>
    </div>
  )
}

export default ContactButton