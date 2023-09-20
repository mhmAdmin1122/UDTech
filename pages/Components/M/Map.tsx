import React from 'react'

const Map = () => {
  return (
    <div className="contactForm bg-[#fff] px-[40px] py-[15px] rounded-xl">
      <h1 className='font-bold text-2xl text-center cursor-context-menu mb-3'>Map Direction</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6952.558750736489!2d71.6711921!3d29.39138229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1695216782539!5m2!1sen!2sus" className='border-2 border-gray-300 h-[300px] w-full rounded-md' loading="lazy"/>
    </div>
  )
}

export default Map
