import React from 'react'

import './button.css'

const ContactButton = () => {
  return (
    <div>
      <button className='justify-center flex m-auto my-8 text-4xl bg-btnColor hover:bg-btnHover text-textColor py-2 px-4 rounded transition duration-300 btn'>Entre em contato conosco e agende sua consulta!</button>
{/* https://docs.google.com/forms/d/e/1FAIpQLScUvO28l6hyaI73-Ju_VVcTtgec1gmG2iwbjOo2XOG2Zjmilw/viewform?usp=sf_link */}
    </div>
  )
}

export default ContactButton