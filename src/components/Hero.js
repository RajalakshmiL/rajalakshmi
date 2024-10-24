import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const Hero = () => {
  const el = useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ['I am a Web Developer', 'Current Role Sr.Web Developer'],
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    }
  });

  return (
    <section id='hero' className='flex flex-col justify-center h-[100vh] px-40 bg-cover bg-hero_image'>
      <div className='pb-14'>
          <h1 className='font-bold text-6xl'>Rajalakshmi</h1>
          <p className='mt-4'>
            <span className='text-blue-600 text-2xl tracking-wider typed' ref={el}></span>
          </p>
          
      </div>

        
    </section>
  )
}

export default Hero
