import React from 'react'

const ContactForm = () => {
    return (

        <div className="contactForm bg-[#fff] px-[40px] py-[15px] rounded-xl">
            <h1 className='font-bold text-2xl text-center cursor-context-menu'>Contact Form</h1>
            <form action="" className='grid items-center'>
                <label htmlFor="">Full Name: </label>
                <input type="text" placeholder='Jhon Doe' required />
                <label htmlFor="">E-mail: </label>
                <input type="email" placeholder='example@xyz.com' required />
                <label htmlFor="">Message: </label>
                <textarea rows={5} cols={20} placeholder='Message' required />
                <div className="flex flex-wrap justify-center items-center gap-6 my-3">
                    <button type='submit' className='bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
