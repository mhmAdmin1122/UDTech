import React from 'react'
import { BsBatteryHalf, BsBatteryFull, BsBatteryCharging } from 'react-icons/bs'

const BuyProjects = () => {
    return (
        <section>
            <b className="brand-Box-Title flex w-full items-center justify-center text-2xl font-extrabold">
                Buy Projects
            </b>
            <div className="packages flex flex-wrap w-full justify-center items-center gap-12 mt-4 mb-5">

                <div className="primary grid items-center content-center justify-items-center bg-blue-900 text-white border-2 border-blue-800 shadow-md shadow-gray-300 px-12 py-12 rounded-lg">
                    <div className='text-2xl flex flex-wrap items-center gap-2'><b><BsBatteryHalf /></b><b>Primary</b></div>
                    <hr className='h-[4px] bg-gray-700' />
                    <div className="detailofPackage">
                        <ol className="detailList font-bold">
                            <li className='py-2'>&rarr; Fully Responsive Design</li>
                            <li className='py-2'>&rarr; WEB-APP Only</li>
                            <li className='py-2'>&rarr; Own design Create For you.</li>
                            <li className='py-2'>&rarr; Without Domain and Hosting</li>
                            <li className='py-2'>&rarr; Open To work Hour Service Only</li>
                            <li className='py-2'>&rarr; With SEO</li>
                            <li className='py-2'>&rarr; Project Using Only Html, CSS, JS, and React.js</li>
                            <li className='py-2'>&rarr; With MongoDB Database</li>
                            <p>For more Contact With Us</p>
                        </ol>
                        <div className='price-box'>
                            <b>$50 only</b>
                        </div>
                    </div>
                </div>

                <div className="basic">
                    <div className='flex items-center gap-2'><b><BsBatteryFull /></b><b>Basic</b></div>
                    <div className="detailofPackage">
                        <ul className="detailList"></ul>
                    </div>
                </div>

                <div className="premium">
                   <div className='flex items-center gap-2'><b><BsBatteryCharging /></b><b>Premium</b></div>
                    <div className="detailofPackage">
                        <ul className="detailList"></ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BuyProjects;
