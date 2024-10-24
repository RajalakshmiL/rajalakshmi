import React from 'react'
import aboutMe from '../assets/images/aboutme.png';

const About = () => {
  return (
    <section id='about' className=' bg-[#fafafa]  p-14 body-section'>
        <div className='text-center pb-2 relative section-title'>
            <h1 className='section-title-bar'>Who Am I ?</h1>
            <p>Basic Stuffs but I identified its still worth spreading.</p>
        </div>
        <div className='grid grid-cols-5 mt-5  '>
            <div className='text-center col-start-1 col-end-2 col-span-2'>
                <img className='mt-[-36px] h-80 max-w-max' src={aboutMe}></img>
            </div>
            <div className='col-start-2 col-end-6 pl-16'>
                <h2 className='font-Raleway-font font-bold text-[#728394] text-2xl mb-2'>Web Developer</h2>
                <p className='mb-4'>I develop and developed a classy and modern web applications based on the modern thoughts and recent trend.</p>
                <div className='grid grid-cols-2 mb-2 aboutText' >
                    <ul>
                        <li><strong>DOB:</strong><span>23-05-1997 (27)</span></li>
                        <li><strong>Email:</strong><a href='mailto:indhuja2305@gmail.com' className='text-[#0563bb]'>indhuja2305@gmail.com</a></li>
                        <li><strong>Location:</strong><span>TamilNadu ,India 🇮🇳</span></li>
                    </ul>
                
                    <ul>
                        <li><strong>Work Queries:</strong><span>Available</span></li>
                        <li><strong>Experience:</strong><span>5 years and 6 month</span></li>
                        <li><strong>Current Role:</strong><span>Web developer</span></li>
                    </ul>
                </div>
                <div className='font-Architect-sans'>
                    <p className='mb-4'>
                    I'm usually a math addict , so I always have craze in logical solvings and also a passionate developer with proven track record of taking complex problems and turnnig into easy interface web application
                    </p>
                    <p>
                    I'm good at Fixing gear of slow racing web application and web sites. I've worked in pretty cool application but still hungry on modern web applications !!!
                    </p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About