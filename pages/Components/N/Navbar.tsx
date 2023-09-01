import Link from 'next/link';
import React, { useState, useEffect } from 'react';

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
        <nav className={`flex flex-wrap w-full h-auto text-white bg-blue-900 px-[18px] py-[8px] text-2xl font-semibold top-0 z-30 justify-between ${isSticky ? 'sticky bg-gray-700 text-white' : ''}`}>
            <div className="logo-box">logo</div>
            <div className="tabs-box">
                <ul className="tabs-List text-lg flex flex-wrap gap-4">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/"><li>About</li></Link>
                    <Link href="/"><li>Services</li></Link>
                    <Link href="/"><li>Case Study</li></Link>
                    <Link href="/"><li>Testmonials</li></Link>
                    <Link href="/"><li>Blog</li></Link>
                    <Link href="/"><li>Career</li></Link>
                    <Link href="/"><li>Search</li></Link>
                    <Link href="/"><li>Help</li></Link>
                    <Link href="/"><li>Regester</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
