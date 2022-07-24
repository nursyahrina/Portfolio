import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import MovieReviews from '../assets/MovieReviewsApp.png'
import NotesApp from '../assets/NotesApp.png'
import BookshelfApp from '../assets/BookshelfApp.png'
import ExerciseTracker from '../assets/ExerciseTracker.png'

const projects = [ 
  [ 'Notes Application', NotesApp, 'https://inquisitive-pudding-79d9bb.netlify.app/', 'https://github.com/nursyahrina/NotesApp' ],
  [ 'Bookshelf Application', BookshelfApp, 'https://playful-seahorse-1c90fa.netlify.app/', 'https://github.com/nursyahrina/Bookshelf' ],
  [ 'MovieReviews Application', MovieReviews, 'https://gilded-maamoul-a67e9c.netlify.app/', 'https://github.com/nursyahrina/MovieReviews' ],
  [ 'ExerciseTracker Application', ExerciseTracker, 'https://wonderful-florentine-b1bbd2.netlify.app/', 'https://github.com/nursyahrina/mern-exercise-tracker'],
  [ 'ExerciseTracker Back-End', ExerciseTracker, '#', 'https://github.com/nursyahrina/mern-exercise-tracker-backend']
];

const Projects = () => {
  return (
    <div name='projects' className='projects w-full md:h-screen bg-[#342c34] text-[#e3dee3]'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <h3 className='text-5xl font-bold inline border-b-4 border-[#f3973b]'>
              Projects <AiFillProject className='hidden md:inline mb-6' />
          </h3>
          <p className='py-4'>My Recent Projects:</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map(project => {
            return (
              <div style={{ backgroundImage: `url(${project[1]})` }}
              className='group content-div content-item'>
                <div className='z-0 opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-semibold text-[#fffffc] tracking-wider drop-shadow-lg'>
                    {project[0]}
                  </span>

                  <div className='pt-9 text-center'>
                    <a href={project[2]}>
                      <button className='rounded-lg px-4 py-3 m-2 bg-[#fffffc] text-gray-700 font-semibold text-lg hover:-translate-y-1 duration-100 hover:drop-shadow-lg'>Demo</button>
                    </a>
                    <a href={project[3]}>
                      <button className='rounded-lg px-4 py-3 m-2 bg-[#fffffc] text-gray-700 font-semibold text-lg hover:-translate-y-1 duration-100 hover:drop-shadow-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Projects