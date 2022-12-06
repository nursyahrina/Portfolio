import React from 'react'
import { RiChatSmile3Fill } from 'react-icons/ri'

const About = () => {
  return (
    <div name='about' className='w-full h-screen pt-28'>
      <div className='w-fit m-auto flex flex-col justify-center items-center rounded-3xl py-20 pl-4 pr-20 bg-gradient-to-br from-amber-50 to-amber-100 shadow-amber-400 shadow-2xl'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <h3 className='text-5xl font-bold inline border-b-8 rounded-lg pl-3 pr-1 border-amber-500'>
              About <RiChatSmile3Fill className='hidden md:inline mb-6' />
            </h3>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold text-amber-500 drop-shadow-xl'>
            <h2>Hi! I'm Nursyahrina,<br />nice to meet you.</h2>
          </div>
          <div>
            <p>I'm a fresh graduate with Bachelor degree in Informatics Engineering. I'm passionate about data and programming; having intermediate skills in web-based application development, front-end and back-end development; and highly interested in topics of data science. I'm certified student at Dicoding Academy in Front-End (React) and Back-End Web Developer learning path, also in Machine Learning Developer learning path.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About