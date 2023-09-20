import Link from 'next/link'
import React from 'react'
import Layout from '../Components/L/Layout'
import Head from 'next/head'

const index = () => {
    return (
        <>
            <Head>
                <title>Login Now</title>
            </Head>
            <Layout>
                <div className='px-44 py-14'>
                    <h1 className='text-4xl font-bold text-center'>Login Now</h1>
                    <div className='flex flex-wrap items-center gap-2 w-full justify-center my-3'>
                        <b className='text-xl font-medium py-2 px-2 text-blue-500 transition-all duration-700 hover:text-red-500 hover:!underline cursor-pointer'>Need an account?</b>
                        <Link href={'/register'} className='text-gray-100 py-2 px-4 bg-green-600 rounded-md font-bold'>Register Now</Link>
                    </div>
                    <form action="" className='grid items-center justify-center'>
                        <div className='w-[420px]'>
                            <label htmlFor="">Username:</label>
                            <input type="text" className='w-full' required placeholder='Username' />
                            <label htmlFor="">Password:</label>
                            <input type="password" className='w-full' required placeholder='********' />
                            <div className="flex flex-wrap items-center w-full gap-2">
                                <input type="checkbox" name="Check Now" className="outline-none" required />
                                <h1 className="my-2 font-medium cursor-context-menu">
                                    Keep me Login?
                                </h1>
                            </div>
                            <div className='flex justify-center '>
                                <button type="submit" className='px-4 py-2 bg-green-600 rounded-lg text-white font-bold my-3 flex flex-wrap justify-center'>Login Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default index
