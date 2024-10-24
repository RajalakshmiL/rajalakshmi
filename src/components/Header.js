import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";


const Header = () => {
  const navHandler = (section) => {
      const element = document.getElementById(section);
      element.scrollIntoView({
        behavior:'smooth'
      });
  }
  return (
    <header className='flex flex-col justify-center h-[100vh] fixed'>
        <nav className='nav-menu px-2'>
            <ul>
                <li className='group'><a onClick={() => navHandler('hero')}><AiFillHome size={22}/><span className='hidden group-hover:block' >Home</span></a></li>
                <li className='group'><a onClick={() => navHandler('about')}><IoPerson size={22}/><span className='hidden group-hover:block' >About</span></a></li>
                <li className='group'><a onClick={() => navHandler('resume')}><FaFile size={22}/><span className='hidden group-hover:block' >Resume</span></a></li>
                <li className='group'><a onClick={() => navHandler('portfolio')}><FaBook size={22}/><span className='hidden group-hover:block' >Portfolio</span></a></li>
                <li className='group'><a onClick={() => navHandler('certificate')}><FaServer size={22}/><span className='hidden group-hover:block' >Certification</span></a></li>
                <li className='group'><a onClick={() => navHandler('contact')}><FaEnvelope size={22}/><span className='hidden group-hover:block' >Contact</span></a></li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header