import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '../assets/Logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='navbar z-30 fixed w-full h-[80px] flex justify-between items-center px-4'>
      <div>
        <img src={Logo} alt="Logo" className='w-[50px] rounded-xl'/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex animate-scale-group'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-100} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r to-yellow-300 from-amber-300 animate-scale-group flex flex-col justify-center items-center'}>
        <li className='py-6 text-2xl hover:text-amber-700'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-amber-700'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-amber-700'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={-100} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-amber-700'>
          <Link onClick={handleClick} to="projects" smooth={true} offset={-100} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-amber-700'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul className='side-nav-group'>
          <li className='rounded-tr-xl bg-gradient-to-r from-blue-500 to-blue-600'>
            <a className='text-blue-50' 
            href="https://www.linkedin.com/in/nursyahrina/">Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='bg-gradient-to-r from-slate-500 to-slate-600'>
            <a className='text-slate-50' 
            href="https://github.com/nursyahrina">Github <FaGithub size={30} />
            </a>
          </li>
          <li className='bg-gradient-to-r from-rose-500 to-rose-600'>
            <a className='text-rose-50' 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nursyahrina17@gmail.com">Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='rounded-br-xl bg-gradient-to-r from-amber-500 to-amber-600'>
            <a className='text-amber-50' 
            href="/">Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar