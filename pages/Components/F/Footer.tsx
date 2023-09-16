import React from 'react'
import { FaCopyright, FaLocationArrow, FaFacebook, FaInstagramSquare, FaYoutube, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='flex rounded-t-[36px] flex-wrap items-center w-full justify-between bg-[#222648] text-[#fff] pt-[29px] pb-[28px] px-[28px]'>
            <div className="address flex flex-wrap items-center gap-2">
                <FaLocationArrow />
                <h3 className='cursor-context-menu'>Shop 2/3, Cirular Road, Bahawalpur</h3>
            </div>
            <div className="cpy-line flex flex-wrap items-center gap-2">
                <FaCopyright />
                <h3 className='cursor-context-menu'>2023, All Copyright reserved by UDTech </h3>
            </div>
            <div className="social-links flex flex-wrap items-center gap-6">
                <i className="cursor-pointer text-xl"><FaFacebook /></i>
                <i className="cursor-pointer text-xl"><FaInstagramSquare /></i>
                <i className="cursor-pointer text-xl"><FaYoutube /></i>
                <i className="cursor-pointer text-xl"><FaTiktok /></i>
            </div>
        </footer>
    )
}

export default Footer
