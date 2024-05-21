import React from 'react';

const About = () => {
  return (
  <div id='About'>
    <h1 className='bg-navColor text-textColor border-y-2 border-black/40 my-6 md:my-10 h-16 items-center justify-center flex text-2xl'>Sobre nós</h1>
    <div className='mx-10 md:mx-20 tracking-wider text-textColor text-justify'>
      <div className='flex bg-navColor p-4 rounded-lg border-2 border-black/40'>
        <img src="https://placehold.co/250x300" alt="Profile" className='mr-4 hidden md:flex' />
        <div className='flex flex-col justify-between'>
          <p className='text-center text-4xl my-4'>Fulano de Tal</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam temporibus unde placeat eum libero, itaque alias repellendus, officia obcaecati velit reiciendis nihil voluptas magnam minima minus! Consectetur, distinctio voluptates!
            Modi delectus, molestias eveniet unde quo iure cum. Officiis iure architecto excepturi sunt veniam quis expedita. Unde dolores quae placeat dolore accusamus id illo? Vitae eaque repellat adipisci assumenda facilis?</p>
          <p className='text-center mt-auto italic'>CRP: 00000/00</p>
        </div>
      </div>
      <div className='flex bg-navColor p-4 rounded-lg border-2 border-black/40 mt-8'>
        <img src="https://placehold.co/250x300" alt="Profile" className='mr-4 hidden md:flex' />
        <div className='flex flex-col justify-between'>
          <p className='text-center text-4xl my-4'>Fulano de Tal</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam temporibus unde placeat eum libero, itaque alias repellendus, officia obcaecati velit reiciendis nihil voluptas magnam minima minus! Consectetur, distinctio voluptates!
            Modi delectus, molestias eveniet unde quo iure cum. Officiis iure architecto excepturi sunt veniam quis expedita. Unde dolores quae placeat dolore accusamus id illo? Vitae eaque repellat adipisci assumenda facilis?</p>
          <p className='text-center mt-auto italic'>CRP: 00000/00</p>
        </div>
      </div>
        <div className='flex bg-navColor p-4 rounded-lg border-2 border-black/40 mt-8'>
          <img src="https://placehold.co/250x300" alt="Profile" className='mr-4 hidden md:flex' />
          <div className='flex flex-col justify-between'>
            <p className='text-center text-4xl my-4'>Fulano de Tal</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam temporibus unde placeat eum libero, itaque alias repellendus, officia obcaecati velit reiciendis nihil voluptas magnam minima minus! Consectetur, distinctio voluptates!
              Modi delectus, molestias eveniet unde quo iure cum. Officiis iure architecto excepturi sunt veniam quis expedita. Unde dolores quae placeat dolore accusamus id illo? Vitae eaque repellat adipisci assumenda facilis?</p>
            <p className='text-center mt-auto italic'>CRP: 00000/00</p>
          </div>
        </div>
    </div>
  </div>
  );
}

export default About;
