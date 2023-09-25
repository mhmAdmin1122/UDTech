import React from 'react'
import Layout from '../Components/L/Layout'
import Head from 'next/head'
import { SiUpwork } from 'react-icons/si'
import { GiTakeMyMoney, GiClockwork } from 'react-icons/gi'
import { FaComputer } from 'react-icons/fa6'
import Accordian from '../Components/A/Accordian'

const index = () => {
  return (
    <>
      <Head>
        <title>Earn Reward</title>
      </Head>
      <Layout>

        <div className='py-10 px-32'>

          <h1 className='text-6xl font-bold text-center cursor-context-menu'>Earn Reward</h1>

          <div className="flex flex-wrap items-center justify-center gap-6 my-4 text-[#1a661e]">

            {/* green Icon Card */}
            <div className="grid justify-items-center relative bg-[#151244] transition-all duration-1000 hover:bg-[#3c569e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-green-600 px-4 py-3 rounded-md">
                <SiUpwork />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>Upwork Profile</h2>
                <p className='cursor-context-menu text-center'>Apply for Upwork Verified Profile</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-green-800 text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Green</b>

            </div>

            <div className="grid justify-items-center relative bg-[#151244] transition-all duration-1000 hover:bg-[#3c569e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-green-600 px-4 py-3 rounded-md">
                <GiTakeMyMoney />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON $10</h2>
                <p className='cursor-context-menu'>Apply for $10</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-green-800 text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Green</b>

            </div>

            <div className="grid justify-items-center relative bg-[#151244] transition-all duration-1000 hover:bg-[#3c569e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-green-600 px-4 py-3 rounded-md">
                <FaComputer />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON PC</h2>
                <p className='cursor-context-menu'>Apply for PC</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-green-800 text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Green</b>

            </div>

            {/* Blue Icon Card */}
            <div className="grid justify-items-center relative bg-[#381244] transition-all duration-1000 hover:bg-[#823c9e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#121544] px-4 py-3 rounded-md">
                <GiClockwork />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON A Job</h2>
                <p className='cursor-context-menu'>Apply for Upwork JOB{'($10)'}</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#544eac] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Blue</b>

            </div>

            <div className="grid justify-items-center relative bg-[#381244] transition-all duration-1000 hover:bg-[#823c9e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#121544] px-4 py-3 rounded-md">
                <GiTakeMyMoney />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON $15</h2>
                <p className='cursor-context-menu'>Apply for $15</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#544eac] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Blue</b>

            </div>

            <div className="grid justify-items-center relative bg-[#381244] transition-all duration-1000 hover:bg-[#823c9e] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#121544] px-4 py-3 rounded-md">
                <FaComputer />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON PC</h2>
                <p className='cursor-context-menu'>Apply for PC</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#544eac] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Blue</b>

            </div>

            {/* Red Icon Card */}
            <div className="grid justify-items-center relative bg-[#a33f3f] transition-all duration-1000 hover:bg-[#d67171] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#ff0000] px-4 py-3 rounded-md">
                <GiClockwork />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON 2 Job</h2>
                <p className='cursor-context-menu text-center'>Apply for Upwork JOB{'(each job $10)'}</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#ff0000] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Red</b>

            </div>

            <div className="grid justify-items-center relative bg-[#a33f3f] transition-all duration-1000 hover:bg-[#d67171] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#ff0000] px-4 py-3 rounded-md">
                <GiTakeMyMoney />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON $20</h2>
                <p className='cursor-context-menu'>Apply for $20</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#ff0000] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Red</b>

            </div>

            <div className="grid justify-items-center relative bg-[#a33f3f] transition-all duration-1000 hover:bg-[#d67171] w-[280px] h-[290px] shadow-md shadow-gray-300 border-2 border-gray-200 rounded-lg py-3 px-4 text-[#fff] hover:w-[320px]">

              <div className="card_Image flex items-center justify-center h-[100px] w-[100px] text-6xl bg-white text-[#ff0000] px-4 py-3 rounded-md">
                <FaComputer />
              </div>

              <div className="grid items-center justify-items-center gap-2">
                <h2 className='text-2xl font-bold cursor-context-menu'>WON PC</h2>
                <p className='cursor-context-menu'>Apply for PC</p>
                <button className='bg-[#fff] text-[#333] font-bold px-4 py-2 rounded-lg'>Apply</button>
              </div>

              <b className='px-4 py-2 bg-[#ff0000] text-[#fff] cursor-pointer absolute top-[4px] right-0 rounded-l-md'>Red</b>

            </div>

          </div>

          <Accordian />

        </div>



      </Layout>
    </>
  )
}

export default index;
