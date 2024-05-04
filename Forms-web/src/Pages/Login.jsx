import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>

    {/* Design start */}
      <div className='border-solid border rounded-lg w-1/3 h-2/3 shadow-md flex flex-col items-center gap-3 box-border p-5'>
        <h3 className='text-center font-mono font-semibold text-3xl mt-2'>Login</h3>
        <hr className='w-4/5 border-dotted border border-slate-600'/>
        <form className='flex flex-col w-4/5 h-4/5 gap-6'>
          <input 
          type='text' 
          placeholder='Email (or) UserName '
          className='border-doted placeholder:italic placeholder:text-slate-400 border mt-3 p-2 rounded-lg'/>
          <input 
             type='text' 
            placeholder='Password'
            className='border-doted placeholder:italic placeholder:text-slate-400 border p-2 rounded-lg'
          />
          <button className='border-dashed border-2 rounded-lg px-4 py-2 font-semibold'>Login</button>
  
          <h2 className='font-mono font-semibold text-md text-slate-400 mt-2'>
          New User? 
          <Link to={'/signup'}>
          <span className='text-slate-600'> Signup</span>
          </Link>
          </h2>
        </form>
        
      </div>
    
    </div>
  )
}

export default Login