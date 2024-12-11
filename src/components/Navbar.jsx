import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import Logo from '../utils/1.png'
import logo2 from '../utils/logo4.png'

export const Navbar = () => {

    const [nav,setnav]=useState(false);

    const handlenav=()=>{
        setnav(!nav);
    };

  return (
    <div className=' flex justify-between items-center h-16 max-w-{1240px} mx-auto px-4 text-black bg-gray-400 m-6 ml-3 mr-3 rounded-2xl  '>
        
        {/* <h1 className='w-full text-2xl font-bold text-slate-900 font-serif'>{Logo} </h1> */}
        
            <ul className='hidden md:flex'>
                <li className='p-4 '>Home</li>
                <li className='p-4 '>About</li>
                <li className='p-4 ' >Projects</li>
                <li className='p-4 '>Skills</li>
                <li className='p-4 '>Academic</li>
            </ul>

            <div onClick={handlenav} className=''>
                {nav ? <AiOutlineClose size={20}/> :<img class="rounded-full w-16 h-16 " src={Logo} alt="logo img" />}
            </div>

            <ul className={nav ? 'fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-gray-400 ease-in-out duration-500 p-4' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <img class="rounded-lg w-full h-16 mix-blend-multiply " src={logo2} alt="logo img" />
                    <li className='p-4 border-b border-gray-500'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About_Me</li>
                    <li className='p-4 border-b border-gray-600' >Project</li>
                    <li className='p-4 border-b border-gray-600'>Skill</li>
                    <li className='p-4 border-b border-gray-600'>Academic</li>
            </ul>  
        </div>    
    
  )
}

export default Navbar;