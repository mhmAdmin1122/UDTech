import Image from 'next/image'
import React from 'react'
import pc1 from '@/public/img/brand1Pic.png'
import pc2 from '@/public/img/brand2Pic.png'
import pc3 from '@/public/img/BRAND3PIC.png'
import pc4 from '@/public/img/Brand4Pic.png'
import pc5 from '@/public/img/brand5pic.png'

const Brand = () => {
    return (
        <section>

            <div className="brand-Box-Title flex w-full items-center justify-center text-2xl font-extrabold">
                <b>Brand Follow Us</b>
            </div>

            <div className="Brand_PicContainer flex flex-wrap gap-6 w-full px-24 pb-12 pt-4 justify-center items-center">
                <div className="Brand-Pic-Box shadow-md rounded-lg border-2 border-gray-200 shadow-gray-300 w-[120px] h-[120px] bg-gray-200 flex flex-wrap items-center justify-center">
                    <Image src={pc1} alt='brandPic' width={80} height={80} className='cursor-pointer' />
                </div>

                <div className="Brand-Pic-Box shadow-md rounded-lg border-2 border-gray-200 shadow-gray-300 w-[120px] h-[120px] bg-gray-200 flex flex-wrap items-center justify-center">
                    <Image src={pc2} alt='brandPic' width={80} height={80} className='cursor-pointer' />
                </div>

                <div className="Brand-Pic-Box shadow-md rounded-lg border-2 border-gray-200 shadow-gray-300 w-[120px] h-[120px] bg-gray-200 flex flex-wrap items-center justify-center">
                    <Image src={pc3} alt='brandPic' width={80} height={80} className='cursor-pointer' />
                </div>

                <div className="Brand-Pic-Box shadow-md rounded-lg border-2 border-gray-200 shadow-gray-300 w-[120px] h-[120px] bg-gray-200 flex flex-wrap items-center justify-center">
                    <Image src={pc4} alt='brandPic' width={80} height={80} className='cursor-pointer' />
                </div>

                <div className="Brand-Pic-Box shadow-md rounded-lg border-2 border-gray-200 shadow-gray-300 w-[120px] h-[120px] bg-gray-200 flex flex-wrap items-center justify-center">
                    <Image src={pc5} alt='brandPic' width={80} height={80} className='cursor-pointer' />
                </div>

            </div>

        </section>
    )
}

export default Brand;
