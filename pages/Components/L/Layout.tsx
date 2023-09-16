import React from 'react'
import Navbar from '../N/Navbar'
import Footer from '../F/Footer'

const Layout = ({children}:any) => {
  return (
    <div className='bg-gray-100 relative'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
