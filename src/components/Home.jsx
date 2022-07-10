import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import TypeAnimation from 'react-type-animation';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#342c34]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <TypeAnimation className='mb-2 text-xl text-[#f3973b]'
          cursor={false}
          sequence={["Hi everyone! 👋 It's me,", 1000, '']}
          wrapper="p"
          repeat={Infinity}
        />
        <h1 className='text-5xl sm:text-7xl font-semibold text-[#e3dee3]'>Nursyahrina</h1>
        <h2 className='text-4xl sm:text-6xl font-semibold text-[#bdb2bd]'>I'm a Web Developer.</h2>
        
        <p className='max-w-[700px] py-4 text-l text-[#bdb2bd] '>I'm a final year student in Informatics Engineering transitioning into a professional software developer. Currently, I'm focusing on building web applications.</p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className='group text-[#f6f4f6] text-sm font-bold border-2 rounded-xl px-6 py-3 my-2 flex items-center hover:bg-[#f3973b] hover:border-[#f3973b]'>View Projects
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home