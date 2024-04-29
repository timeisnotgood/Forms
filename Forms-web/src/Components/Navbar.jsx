import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 flex items-center shadow-sm text-gray-600 justify-around mb-2'>
      <p>logo</p>
      <span>FORMS</span>
      <div className='flex gap-4'>
        <button className='text-black rounded-sm outline outline-offset-2 outline-1 outline-slate-400 font-medium px-2'>Login</button>
        <button className=' text-black rounded-sm'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar