import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";


const Resume = () => {
  return (
    <section id='resume' className='p-14 body-section body-section'>
        <div className='grid grid-cols-12'>
            <div className='col-start-1 col-end-11 text-center pb-2 relative section-title'>
                <h1 className='section-title-bar'>RESUME</h1>
                <p className='font-Architect-sans'>If not coding, you'll find me scribbling in the diary or doing yoga.</p>
            </div>
            <div className='col-start-11 col-end-12 text-center mt-6 '>
                <a className="resume-download " href="#" ><FaCloudDownloadAlt fontSize={36} border className='m-[17px]'/></a>
            </div>
        </div>
        
        <div className='grid grid-cols-2 mx-4'>
            {/* Summary details */}
            <div className='px-2'>
                <h1 className='resume-title'>Summary</h1>
                <div className='resume-item'>
                    <h1 className='uppercase text-[#0563bb] text-lg font-semibold'>Rajalakshmi L</h1>
                    <p className='pt-1'><em>Enthusiastic and Ambitious web developer with<span> 5 years and 6 month</span> years experience to contribute to team success through hard work with excellent organizational skills. welcoming challenging projects and enjoying working with all sorts of personalities and Eager to work with personnel in all areas of company to help boost profits and improve opportunities.</em></p>
                    <ul className='list-disc pl-6'>
                        <li className='pt-3'>TamilNadu, India</li>
                        <li className='pt-3'>indhuja2305@gmail.com</li>
                    </ul>
                </div>
                {/* Education details */}
                <div>
                    <h1 className='resume-title'>Education</h1>
                    <div className='resume-item'>
                        <h1 className='uppercase text-[#0563bb] text-lg font-semibold mb-2'>Bachelor Of Engineering & CSE</h1>
                        <span className='bg-[#f7f8f9] font-semibold px-4 py-1 mb-2'>2013 - 2017</span>
                        <p className='pt-2'><em>from Dr.N.G.P. Institute of Technology, CBE (85%)</em></p>
                    </div>
                    <div className='resume-item'>
                        <h1 className='uppercase text-[#0563bb] text-lg font-semibold mb-2'>Bachelor Of Engineering & CSE</h1>
                        <span className='bg-[#f7f8f9] font-semibold px-4 py-1 mb-2'>2013 - 2017</span>
                        <p className='pt-2'><em>from Dr.N.G.P. Institute of Technology, CBE (85%)</em></p>
                    </div>
                </div>
            </div>
            <div className='px-2'>
                <h1 className='resume-title'>Professional Experience</h1>
                <div className='resume-item'>
                    <h1 className='uppercase text-[#0563bb] text-lg font-semibold mb-2'>Senior Web Developer</h1>
                    <span className='bg-[#f7f8f9] font-semibold px-4 py-1 mb-2'>2023 - Present</span>
                    <p className='pt-2'><em>Vysystems India Pvt Ltd, Chennai</em></p>
                    <ul className='list-disc pl-6'>
                        <li className='pt-3'><span className='font-semibold'>Url(s)</span> : www.vybog.com</li>
                        <li className='pt-3'><span className='font-semibold'>Technologies</span> : HTML5, CSS (Less), Javascript/jQuery, C# (.Net), Cassandra(.CQL)</li>
                    </ul>
                </div>

                <div className='resume-item'>
                    <h1 className='uppercase text-[#0563bb] text-lg font-semibold mb-2'>Web Developer</h1>
                    <span className='bg-[#f7f8f9] font-semibold px-4 py-1 mb-2'>2018 - 2022</span>
                    <p className='pt-2'><em>Shanki System India Pvt Ltd, CBE, TN</em></p>
                    <ul className='list-disc pl-6'>
                        <li className='pt-3'><span className='font-semibold'>Url(s)</span> : www.vettrix.com</li>
                        <li className='pt-3'><span className='font-semibold'>Technologies</span> : HTML5, CSS (Less), Javascript, Vue Js (NUXT), PHP (Phalcon), MySQLi</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume