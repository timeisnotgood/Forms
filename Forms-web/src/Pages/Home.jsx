import React from 'react'
import { Link, Routes } from 'react-router-dom'
import { faArrowRightLong, faEye, faHouse, faRightFromBracket, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../Components/Navbar'


const Home = ({userData}) => {
  
  if (userData) {
    const {email, id, username} = userData.user;
  }

  return (
      <div className='w-full w-auto h-lvh flex flex-col gap-10 mt-40 items-center'>
      <div className='w-3/4  grid md:grid-cols-2 w-4/5 lg:w-4/6 lg:flex flex-row justify-center items-center'>
        <h1 className='font-bold w-64 text-xl md:text-2xl md:w-80 text-center lg:text-3xl lg:w-96 lg:text-right'>HANDELING THE FORMS</h1>
        <h1 className='bg-black w-64 text-center text-white p-2 font-bold text-xl md:text-2xl rounded-r-md sm:text-center lg:text-3xl lg:text-left lg:w-max'>IN DIFF WAY</h1>
      </div>
      <div className='flex flex-col items-center gap-10 w-4/5 sm:flex-row lg:w-4/5 justify-center'>
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