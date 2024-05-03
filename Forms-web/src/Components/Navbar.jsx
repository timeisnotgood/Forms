import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-12 flex items-center shadow-sm text-gray-600 justify-around mb-2'>
      <FontAwesomeIcon icon={faTableList} className='mt-2' />
      <Link to={'/'}>
        <span>FORMS</span>
      </Link>
      <div className='flex gap-4'>
        <Link to={'/login'}>
          <button className='text-black rounded-sm outline outline-offset-2 outline-1 outline-slate-400 font-medium px-2'>Login</button>
        </Link>
        <Link to={'/signup'}>
          <button className=' text-black rounded-sm'>Signup</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar