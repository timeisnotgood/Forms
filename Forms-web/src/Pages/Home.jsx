import React from 'react'
import Form from './Form'
import List from './List'
import { Link } from 'react-router-dom'
import { faArrowRightLong, faEye, faHouse, faRightFromBracket, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
  return (
    <div className='w-full w-auto h-lvh flex flex-col gap-10 mt-40 items-center'>
    <h1 className='font-bold text-4xl'>HANDELING THE FORMS <span className='bg-black text-white p-2 rounded-r-md'>IN DIFF WAY</span></h1>
    <div className='flex flex-row gap-10'>
        <Link to={'/form'}>
          <p className='shadow-md w-64 h-20 py-5  box-border rounded-md text-center font-semibold text-2xl transition hover:duration-200 hover:bg-black hover:text-white'>
            Form
            <FontAwesomeIcon icon={faArrowRightLong} className='mt-2 ml-5'/>
          </p>
        </Link>
        <Link to={'/list'}>
          <p className='shadow-md w-64 h-20 py-5  box-border rounded-md text-center font-semibold text-2xl transition hover:duration-200 hover:bg-black hover:text-white'>
            List
            <FontAwesomeIcon icon={faArrowRightLong} className='mt-2 ml-5'/>
          </p>
        </Link>
    </div>
    </div>
  )
}

export default Home