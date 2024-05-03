import React from 'react'
import Form from './Form'
import List from './List'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full w-auto h-lvh flex flex-col gap-10 mt-40 items-center'>
    <h1 className='font-bold text-4xl'>HANDELING THE FORMS <span className='bg-black text-white p-2 rounded-r-md'>IN DIFF WAY</span></h1>
    <div className='flex flex-row gap-10'>
        <Link to={'/form'}>
          <div className='shadow-md p-2 w-24 rounded-md flex justify-center items-center h-20 font-semibold transition hover:duration-200 hover:bg-black hover:text-white'>
            Form
          </div>
        </Link>
        <Link to={'/list'}>
          <div className='shadow-md p-2 w-24 rounded-md flex justify-center items-center transition hover:duration-200 h-20 font-semibold hover:bg-black hover:text-white'>
            List
          </div>
        </Link>
    </div>
    </div>
  )
}

export default Home