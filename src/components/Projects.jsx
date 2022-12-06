import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import MovieReviews from '../assets/MovieReviewsApp.png'
import AnyDiscuss from '../assets/AnyDiscuss.png'
import NotesApp from '../assets/NotesApp.png'
import BookshelfApp from '../assets/BookshelfApp.png'
import SISFO from '../assets/SISFO.png'
import ExerciseTracker from '../assets/ExerciseTracker.png'

const projects = [
  [ 'Forum Application', AnyDiscuss, 'https://scintillating-douhua-8d5ab9.netlify.app/', 'https://github.com/nursyahrina/AnyDiscuss' ],
  [ 'Notes Application', NotesApp, 'https://inquisitive-pudding-79d9bb.netlify.app/', 'https://github.com/nursyahrina/NotesApp' ],
  [ 'Bookshelf Application', BookshelfApp, 'https://playful-seahorse-1c90fa.netlify.app/', 'https://github.com/nursyahrina/Bookshelf' ],
  [ 'MovieReviews Application', MovieReviews, 'https://gilded-maamoul-a67e9c.netlify.app/', 'https://github.com/nursyahrina/MovieReviews' ],
  [ 'Academic Information System', SISFO, '#', 'https://github.com/nursyahrina/SISFO_CI'],
  [ 'ExerciseTracker Application', ExerciseTracker, 'https://wonderful-florentine-b1bbd2.netlify.app/', 'https://github.com/nursyahrina/mern-exercise-tracker'],
];

const Projects = () => {
  return (
    <div name='projects' className='projects pt-20 w-full md:h-screen bg-gradient-to-br from-amber-50 to-amber-100'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <h3 className='text-5xl font-bold inline border-b-8 rounded-lg pl-3 pr-1 border-amber-500 drop-shadow-xl'>
              Projects <AiFillProject className='hidden md:inline mb-6' />
          </h3>
          <p className='py-4'>My Recent Projects:</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
          {projects.map((project, index) => {
            return (
              <div key={`${index}`} style={{ backgroundImage: `url(${project[1]})` }}
              className='group content-div content-item py-3'>
                <div className='z-0 opacity-0 group-hover:opacity-100'>
                  <span className='text-xl font-semibold text-[#fffffc] drop-shadow-lg'>
                    {project[0]}
                  </span>

                  <div className='pt-9 text-center'>
                    {(project[2] !== '#') && <a href={project[2]}>
                      <button className='rounded-lg px-4 py-3 m-2 bg-[#fffffc] text-gray-700 font-semibold text-lg hover:-translate-y-1 duration-100 hover:drop-shadow-lg'>Demo</button>
                    </a>}
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