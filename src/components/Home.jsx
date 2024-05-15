import React from 'react'
import ContactButton from './button/ContactButton'


const Home = () => {
  return (
    <div className='mx-10 md:mx-20 tracking-wider text-justify'>
      <img src="https://placehold.co/1080x250" alt="" className='m-auto my-8 hidden md:flex' />
      <p className='text-3xl justify-center my-8 md:m-auto flex text-textColor'>Lorem Ipsum Dolor</p>
      <p className='text-white mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos soluta qui officia ipsa eveniet iste quod cumque veritatis consectetur sed? Voluptates est laudantium temporibus expedita repellendus eaque dolore eveniet officia!
      Soluta, pariatur in impedit repellat quam consequuntur repellendus maxime mollitia minima, voluptates fuga facere praesentium. Aut omnis cumque, tempora modi vel iure harum ipsum possimus consectetur, id culpa quae necessitatibus.
      Vitae reiciendis dolorum labore quod nulla, rem sapiente possimus fuga id cum officiis inventore sint nam quas maxime sed velit delectus, dolores corporis mollitia. Exercitationem dolorem animi voluptatem ipsam? Quae!</p>
      < ContactButton />
    </div>
  )
}

export default Home