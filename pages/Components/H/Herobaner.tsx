import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bannerPic from '@/public/img/ordered.png'
import wave from '../../../public/img/wave.svg'

const Herobaner = () => {
    return (
        <div>
            <div className='flex px-14 py-12 bg-gradient-to-r items-center justify-between from-blue-900 to-orange-600 gap-10'>
                <div className="title_Link-box w-[40%] text-justify">
                    <b className='title text-4xl text-white cursor-context-menu'>Ordered your professional projects.</b>
                    <b className='desc text-white text-lg flex my-5 font-bold '>Stay ahead of your competition with smart apps, sites and software. Ordered Your Project and collect a beautiful Performance applicatiion / web-site with SEO.</b>
                    <div className="links-btn-banner text-white flex flex-wrap gap-2">
                        <Link href={'/'} className='bg-green-500 font-bold px-4 py-2 rounded-lg transition-all ease-in-out duration-1000 hover:bg-white hover:text-black'>Order Your Project &rarr;</Link>
                        <Link href={'/'} className='bg-white text-black font-bold px-4 py-2 rounded-lg transition-all ease-in-out duration-1000 hover:bg-green-500 hover:text-white'>How To Apply &rarr;</Link>
                    </div>
                </div>
                <div className="banner_pic-box w-[60%] flex justify-end">
                    <Image src={bannerPic} alt='banner-pic' className='w-[600px] h-[360px]' />
                </div>
            </div>
            <div className="svg-pic-wave relative bottom-[25px] h-fit z-0">
                <Image src={wave} alt='wave-pic' />
            </div>

        </div>
    )
}

export default Herobaner
