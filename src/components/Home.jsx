import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import TypeAnimation from 'react-type-animation';
import ProfileImage from '../assets/Profile.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-row flex-nowrap justify-center content-center items-center h-full font-bold text-stone-800'>
        <div className='flex flex-col justify-center'>
          <TypeAnimation className='mb-4 text-xl'
            cursor={false}
            sequence={["Hi everyone! 👋 It's me,", 1000, '', 1000, "Hi everyone! 👋 It's me,"]}
            wrapper="p"
            repeat={1}
          />
          <h1 className='text-5xl sm:text-7xl text-amber-600 mb-4'>Nursyahrina</h1>
          <h2 className='text-3xl sm:text-5xl text-amber-500'>I'm a Web Developer.</h2>
          
          <p className='max-w-[700px] py-5 text-l'>I'm a final year student in Informatics Engineering transitioning into a professional software developer. Currently, I'm focusing on building web applications.</p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className='group text-sm font-bold rounded-xl px-6 py-3 my-2 flex items-center border-2 border-amber-500 hover:bg-gradient-to-r from-amber-500 to-amber-400 hover:text-amber-50 hover:translate-x-2 animate-scale'>View Projects
                <HiArrowNarrowRight className='ml-3 text-2xl group-hover:rotate-90 duration-300' />
              </button>
            </Link>
          </div>
        </div>
        <div className='hidden md:block mb-12 w-[400px] h-[400px]'>
          <img className='' src={ProfileImage} alt="Nursyahrina" />
        </div>
      </div>
    </div>
  )
}

export default Home