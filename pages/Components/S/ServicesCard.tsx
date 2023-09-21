import React from 'react'
import Image from 'next/image'
import liveChatPic from '@/public/img/svg/livechat.svg'
import Link from 'next/link'

const ServicesCard = ({pic, title, link_url}:any) => {
    return (
        <div className="card1 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500">
            <Image src={pic} alt='live-chat' className='w-[90px] h-[90px] px-2 py-2' />
            <Link href={`${link_url}`}>{title}</Link>
        </div>
    )
}

export default ServicesCard
