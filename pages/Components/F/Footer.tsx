import Link from 'next/link'
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
                <Link href={'https://www.facebook.com/people/The-Talk-13/100094911926989/'} target='_blank'>
                    <i className="cursor-pointer text-xl"><FaFacebook /></i>
                </Link>
                <Link href={'https://www.instagram.com/udtechoffical/?igshid=MzRlODBiNWFlZA%3D%3D'} target='_blank'>
                    <i className="cursor-pointer text-xl"><FaInstagramSquare /></i>
                </Link>
                <Link href={'https://www.youtube.com/channel/UCoi_0aC3z5_4-2XAyEAaBWg'} target='_blank'>
                    <i className="cursor-pointer text-xl"><FaYoutube /></i>
                </Link>
                <Link href={'/'}>
                    <i className="cursor-pointer text-xl"><FaTiktok /></i>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
