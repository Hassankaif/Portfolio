import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import NavLogo from '../assets/icons/navlogo.png'
import logo from '../assets/icons//logo4.png'

export const Navbar = () => {

    const [nav,setnav]=useState(false);

    const handlenav=()=>{
        setnav(!nav);
    };

  return (
    <div className=' flex justify-between items-center h-16 max-w-{1240px} mx-auto px-4 text-black bg-gradient-to-r to-emerald-50 from-sky-400 m-6 ml-3 mr-3 rounded-2xl  '>
            <ul className='hidden md:flex'>
                <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                <li><a href="#interest" className="hover:text-blue-500">Interest</a></li>
                <li><a href="#skill" className="hover:text-blue-500">Skills</a></li>
                <li><a href="#about-me" className="hover:text-blue-500">About Me</a></li>
                <li><a href="#project" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#academic" className="hover:text-blue-500">Academic</a></li>
            </ul>

            <div onClick={handlenav} className=''>
                {nav ? <AiOutlineClose size={30}/> :<img class="rounded-full w-16 h-16 " src={NavLogo} alt="logo img" />}
            </div>
            
            <ul className={nav ? 'fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-200 bg-gradient-to-r to-emerald-50 from-sky-100 ease-in-out duration-500 p-4' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <img class="rounded-lg w-full h-16 mix-blend-multiply " src={logo} alt="logo img" />
                    <li className='p-4 border-b border-gray-400'>Home</li>
                    <li className='p-4 border-b border-gray-400'>About_Me</li>
                    <li className='p-4 border-b border-gray-400' >Project</li>
                    <li className='p-4 border-b border-gray-400'>Skill</li>
                    <li className='p-4 border-b border-gray-400'>Academic</li>
            </ul>  
        </div>    
    
  )
}

export default Navbar;