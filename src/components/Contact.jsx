import React from 'react'
import { RiMailSendFill, RiSendPlaneFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#342c34] text-[#e3dee3] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/0f494113-d2ee-4e0d-966d-5b5f8751f978" className='w-full flex flex-col max-w-[600px]'>
        <div className='pb-8'>
          <h3 className='text-5xl font-bold inline border-b-4 border-[#f3973b]'>
              Contact <RiMailSendFill className='hidden md:inline mb-6' />
          </h3>
          <p className='py-4'>Submit this following form or send me an email to <span className='text-[#fffffc] font-semibold'>nursyahrina17@gmail.com</span></p>
        </div>
        <input className='p-2 bg-[#fffffc] text-[#342c34] rounded-lg' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#fffffc] text-[#342c34] rounded-lg' type="email" placeholder='Email' name="email" />
        <textarea className='p-2 bg-[#fffffc] text-[#342c34] rounded-lg ' placeholder='Message' name="message" cols="30" rows="8"></textarea>
        <button className='group font-bold border-2 rounded-xl px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#f3973b] hover:border-[#f3973b]'>Send Message
        <RiSendPlaneFill className='ml-3 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-300' />
        </button>
      </form>
    </div>
  )
}

export default Contact