import React from 'react'
import Layout from '../Components/L/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ContactPic from '@/public/img/svg/contact.svg'
import MapPic from '@/public/img/svg/map.svg'
import CoursesProblems from '@/public/img/svg/coursesProblems.svg'
import paymentProb from '@/public/img/svg/payment.svg'
import FeedBackPic from '@/public/img/svg/feedback.svg'
import DownProblems from '@/public/img/svg/download.svg'

const index = () => {
    return (
        <>
            <Head>
                <title>Help</title>
            </Head>
            <Layout>
                <div className="helpPage px-56 py-12 grid justify-center justify-items-center">
                    <div className="mainTitle text-center">
                        <h1 className='text-3xl font-extrabold py-2'>How can we help you?</h1>
                        <p>Need assistance or have questions? We{"'"}re here to help! Explore our resources, <br /> FAQs, and contact options to find the answers and support you need.</p>
                    </div>

                    <div className="cards w-[100%] flex flex-wrap justify-center mt-8 gap-9">

                        {/* Contact Us */}
                        <div className="card1 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={ContactPic} alt='Contact Us' className='w-[90px] h-[90px] px-2 py-2' />
                            <Link href={'/help'}>Contact Us</Link>
                        </div>

                        {/* Onsite Map Direction */}
                        <div className="card2 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={MapPic} alt='tutorialPic' className='w-[90px] px-3 py-3' />
                            <Link href={'/help'}>Onsite Map Direction</Link>
                        </div>

                        {/* Discuss Course Problems */}
                        <div className="card3 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={CoursesProblems} alt='live-chat' className='h-[90px] w-[90px] px-2 py-2' />
                            <Link href={'/help'}>Discuss Course Problems</Link>
                        </div>

                        {/* Payment / Reward Problems */}
                        <div className="card4 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={paymentProb} alt='live-chat' className='h-[90px] w-[90px] px-2 py-3' />
                            <Link href={'/help'}>Payment / Reward Problems</Link>
                        </div>

                        {/* Feedback */}
                        <div className="card5 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={FeedBackPic} alt='live-chat' className='w-[90px] h-[90px] px-2 py-3' />
                            <Link href={'/help'}>Feedback</Link>
                        </div>

                        {/* Downloading Problems */}
                        <div className="card6 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
                            <Image src={DownProblems} alt='live-chat' className='w-[90px] h-[90px] px-2 py-3 ' />
                            <Link href={'/help'}>Downloading Problems</Link>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index
