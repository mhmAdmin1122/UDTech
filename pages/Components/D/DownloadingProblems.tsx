import React from 'react'

const DownloadingProblems = () => {
    return (
        <div className="contactForm bg-[#fff] px-[40px] py-[15px] rounded-xl">
            <h1 className='font-bold text-2xl text-center cursor-context-menu'>Write Your Downloading Problems Here</h1>
            <form action="" className='grid items-center'>
                <textarea rows={6} cols={20} placeholder='Write Your Downloading Problems Here' />
                <div className="flex flex-wrap justify-center items-center gap-6 my-3">
                    <button type='submit' className='bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default DownloadingProblems
