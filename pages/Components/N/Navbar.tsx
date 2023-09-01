import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { LuSearch } from 'react-icons/lu'

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex flex-wrap w-full h-auto text-white px-[18px] py-[8px] text-2xl font-semibold top-0 z-30 justify-between ${isSticky ? 'sticky bg-white text-black shadow-md shadow-gray-300' : 'bg-gradient-to-r items-center from-blue-900 to-orange-600'}`}>
            <Link href={'/'} className="logo-box flex flex-wrap items-center gap-1">
                <b className='cursor-pointer bg-orange-600 p-2 rounded-lg text-white' title='Universal Developers'>UD</b><b>Tech</b>
            </Link>
            <div className="tabs-box">
                <ul className="tabs-List text-lg flex flex-wrap gap-4">
                    <Link href="/"><li className='py-2'>Home</li></Link>
                    <Link href="/"><li className='py-2'>About</li></Link>
                    <Link href="/"><li className='py-2'>Services</li></Link>
                    <Link href="/"><li className='py-2'>Case Study</li></Link>
                    <Link href="/"><li className='py-2'>Testmonials</li></Link>
                    <Link href="/"><li className='py-2'>Blog</li></Link>
                    <Link href="/"><li className='py-2'>Career</li></Link>
                    <Link href="/"><li className='py-2'>Help</li></Link>
                    <Link href="/" className='py-2 flex items-center justify-center'><li><LuSearch className="font-extrabold" /></li></Link>
                    <Link href="/"><li className='bg-blue-900 py-2 px-3 rounded-md text-white border-2 hover:bg-white hover:border-2 hover:border-blue-900 hover:text-black transition-all ease-in-out duration-1000'>Regester</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
