import React from 'react'
import Layout from '../Components/L/Layout'
import Head from 'next/head'

const index = () => {
    return (
        <>
            <Head>
                <title>Chat Room</title>
            </Head>
            <Layout>
                <div className='w-full px-32 py-12'>
                    <h1 className='text-4xl font-bold w-full text-center'>Book your own live chat room!</h1>
                    <div className='room-type flex items-center justify-center w-full py-3 relative'>

                        <div className="Primary relative w-[380px] bg-blue-900 text-white hover:w-[450px] transition-all duration-700 hover:z-40 hover:shadow-md hover:shadow-gray-400 border-2 border-gray-200 rounded-md px-10 py-8">

                            <h2 className="price absolute bg-[#7ba52e] text-[#fff] px-4 py-2 top-[4px] left-[0px] rounded-r-md">$10</h2>
                            <h2 className="price absolute bg-[#a52e2e] text-[#fff] px-4 py-2 top-[4px] right-[0px] rounded-l-md">Primary</h2>
                            <h1 className='text-2xl font-semibold w-full text-center cursor-context-menu my-2'>Primary</h1>
                            <ol className='font-medium'>
                                <li className='py-2'>Access only twice.</li>
                                <li className='py-2'>Two calls a week.</li>
                                <li className='py-2'>Offer for one week only.</li>
                                <li className='py-2'>Preferred person will contact</li>
                                <li className='py-2'>6-Hour Service Only</li>
                                <li className='py-2'>First call 20-min & second call 12-min</li>
                                <li className='py-2'>One is video & the other is voice call.</li>
                                <li className='py-2'>Chat Option are not available.</li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                            </ol>
                            <div className="acceptBtn flex flex-wrap justify-center w-full my-2">
                                <button className='bg-gray-400 py-2 px-4 rounded-md font-semibold text-xl'>Proceed</button>
                            </div>
                        </div>

                        <div className="Basic relative w-[380px] bg-[#807624] text-white hover:w-[450px] transition-all duration-700 hover:z-40 hover:shadow-md hover:shadow-gray-400 border-2 border-gray-200 rounded-md px-10 py-8">

                            <h2 className="price absolute bg-[#2ea595] text-[#fff] px-4 py-2 top-[4px] left-[0px] rounded-r-md">$24</h2>
                            <h2 className="price absolute bg-[#3ca52e] text-[#fff] px-4 py-2 top-[4px] right-[0px] rounded-l-md">Recomended</h2>
                            <h1 className='text-2xl font-semibold w-full text-center cursor-context-menu my-2'>Basic</h1>
                            <ol className='font-medium'>
                                <li className='py-2'>Access only 4-time.</li>
                                <li className='py-2'>Two calls a week.</li>
                                <li className='py-2'>Offer for Two week only.</li>
                                <li className='py-2'>Preferred person will contact</li>
                                <li className='py-2'>9-Hour Service Only</li>
                                <li className='py-2'>First call 40-min & second call 25-min</li>
                                <li className='py-2'>Two video & Two voice call.</li>
                                <li className='py-2'>One time chat access.</li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                                <li className='hidden'></li>
                            </ol>
                            <div className="acceptBtn flex flex-wrap justify-center w-full my-2">
                                <button className='bg-[#171658] py-2 px-4 rounded-md font-semibold text-xl'>Proceed</button>
                            </div>
                        </div>

                        <div className="Premium relative w-[380px] bg-[#235516] text-white hover:w-[450px] transition-all duration-700 hover:z-40 hover:shadow-md hover:shadow-gray-400 border-2 border-gray-200 rounded-md px-10 py-8">
                            <h2 className="price absolute bg-[#a52ea5] text-[#fff] px-4 py-2 top-[4px] left-[0px] rounded-r-md">$40</h2>
                            <h2 className="price absolute bg-[#302ea5] text-[#fff] px-4 py-2 top-[4px] right-[0px] rounded-l-md">Best Choice</h2>
                            <h1 className='text-2xl font-semibold w-full text-center cursor-context-menu my-2'>Premium</h1>
                            <ol className='font-medium'>
                                <li className='py-2'>Access only 16-time.</li>
                                <li className='py-2'>Four calls a week.</li>
                                <li className='py-2'>Offer for Four week only.</li>
                                <li className='py-2'>Your recomended person will contact</li>
                                <li className='py-2'>14-Hour Service Only</li>
                                <li className='py-2'>First call 60-min & second call 40-min</li>
                                <li className='py-2'>8 video & 8 voice call.</li>
                                <li className='py-2'>Unlimated chat access.</li>
                            </ol>
                            <div className="acceptBtn flex flex-wrap justify-center w-full my-2">
                                <button className='bg-[#0f2b28] py-2 px-4 rounded-md font-semibold text-xl'>Proceed</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index
