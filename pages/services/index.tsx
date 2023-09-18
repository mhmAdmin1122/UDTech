import React from 'react'
import Layout from '../Components/L/Layout'
import Head from 'next/head'
import Image from 'next/image'
import labelpic from '@/public/img/svg/24service.svg'
import vec from '@/public/img/svg/services.svg'
import liveChatPic from '@/public/img/svg/livechat.svg'
import tutorialPic from '@/public/img/svg/tutorials.svg'
import certificate from '@/public/img/svg/certificate.svg'
import reward from '@/public/img/svg/win.svg'
import careerPic from '@/public/img/svg/career.svg'
import playstore from '@/public/img/svg/playstore.svg'
import blogPic from '../../public/img/svg/blog.svg'
import Link from 'next/link'

const index = () => {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <Layout>
                {/* Main Content Services Page */}
                <div className='px-20 pt-8 pb-14'>
                    <div className="title_services pl-[100px] flex flex-wrap w-full items-center font-bold text-3xl">
                        <h1 className='cursor-context-menu'>Our Services</h1>
                        <Image src={labelpic} alt='24/7-pic' />
                    </div>
                    <div className='flex flex-wrap w-full justify-around items-center'>

                        <div className="cards w-[60%] flex flex-wrap gap-9">

                            {/* Live chat */}
                            <div className="card1 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={liveChatPic} alt='live-chat' className='w-[90px] h-[90px] px-2 py-2' />
                                <Link href={'/services'}>Live Chat Rooms</Link>
                            </div>

                            {/* Video tutorils */}
                            <div className="card2 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={tutorialPic} alt='tutorialPic' className='w-[90px] px-3 py-3' />
                                <Link href={'/services'}>Video Tutorials</Link>
                            </div>

                            {/* Certification */}
                            <div className="card3 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={certificate} alt='live-chat' className='h-[90px] w-[90px] px-2 py-2' />
                                <Link href={'/services'}>Certification</Link>
                            </div>

                            {/* Earn Reward */}
                            <div className="card4 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={reward} alt='live-chat' className='h-[90px] w-[90px] px-2 py-3' />
                                <Link href={'/services'}>Earn Reward</Link>
                            </div>

                            {/* Career Resources */}
                            <div className="card5 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={careerPic} alt='live-chat' className='w-[90px] h-[90px] px-2 py-3' />
                                <Link href={'/services'}>Career Resources</Link>
                            </div>

                            {/* Read Blog */}
                            <div className="card6 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                                <Image src={blogPic} alt='live-chat' className='px-2 py-3 ' />
                                <Link href={'/services'}>Read Blog</Link>
                            </div>

                        </div>

                        <div className="illustaratePic w-[40%] grid justify-items-center items-center">
                            <Image src={vec} alt='24/7-pic' className='relative z-20' />
                            <div className='flex flex-wrap gap-8 items-center'>
                                <Image src={playstore} alt='24/7-pic' className='relative z-20 cursor-pointer' />
                                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-[#fff] py-2 px-5 rounded-md hover:shadow-lg hover:shadow-[#9798d3] transition-all ease-in-out duration-1000 text-lg font-bold'>About Services</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index
