import Link from 'next/link'
import React from 'react';

const Navbar = () =>{
    return(
        <nav className='flex p-3 bg-white px-10'>
            <Link 
                href={'/'}
                className='text-black hover:text-gray-400 hover:underline flex-1'>
                
                Home
            </Link>
            <Link 
                href='/about'
                className='text-black hover:text-gray-400 hover:underline flex-1'>
                
                About Me
            </Link>
            <Link 
                href={'/project'}
                className='text-black hover:text-gray-400 hover:underline flex-1'>
                
                Project
            </Link>
            <Link 
                href={'/skills'}
                className='text-black hover:text-gray-400 hover:underline flex'>
                
                Skills
            </Link>
        </nav>
    );
};

export default Navbar;