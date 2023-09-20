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
import ServicesCard from '../Components/S/ServicesCard'

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

                            <ServicesCard pic={liveChatPic} title="Live Chat Rooms" link_url="/chatroom" />
                            <ServicesCard pic={tutorialPic} title="Video Tutorials" link_url="/services" />
                            <ServicesCard pic={certificate} title="Certification" link_url="/services" />
                            <ServicesCard pic={reward} title="Earn Reward" link_url="/services" />
                            <ServicesCard pic={careerPic} title="Career Resources" link_url="/services" />
                            <ServicesCard pic={blogPic} title="Read Blog" link_url="/services" />

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
