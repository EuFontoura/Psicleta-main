import React from 'react'

import './button.css'

const ContactButton = () => {
  return (
    <div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScUvO28l6hyaI73-Ju_VVcTtgec1gmG2iwbjOo2XOG2Zjmilw/viewform?usp=sf_link"><button className='justify-center flex m-auto my-8 text-xl md:text-4xl bg-btnColor text-textColor py-1 px-2 md:py-2 md:px-4 rounded transition duration-300 btn'>Entre em contato conosco e agende sua consulta!</button></a>
    </div>
  )
}

export default ContactButton