import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios, { Axios } from 'axios';

const Signup = () => {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username : "",
    email : "",
    password :""
  })

  const inputHandler = (e) =>{
    setSignUpData({...signUpData,[e.target.name] : e.target.value});
  }

  const submitHandler = async(e) =>{
    e.preventDefault();

    const signInResponse = await axios.post(`http://localhost:5000/user/postuser`, {
      id : uuidv4(),
      username : signUpData.username,
      email : signUpData.email,
      password : signUpData.password,
    },{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }})

    const res = signInResponse.request.status;
    if (res == 200) {
      navigate("/login")
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>

    {/* Design start */}
      <div className='border-solid border rounded-lg  w-56 sm:w-2/4 md:w-1/3 h-3/4 shadow-md flex flex-col items-center gap-3 box-border p-5'>
        <h3 className='text-center font-mono font-semibold text-3xl mt-2'>SignUp</h3>
        <hr className='w-4/5 border-dotted border border-slate-600'/>
        <form 
        className='flex flex-col w-4/5 h-4/5 gap-6'
        onSubmit={submitHandler}>
        
          <input 
          type='text' 
          placeholder='UserName'
          name='username'
          onChange={inputHandler}
          className='border-doted placeholder:italic placeholder:text-slate-400 placeholder:text-sm sm:placeholder:text-md border mt-3 p-2 rounded-lg'/>

          <input 
          type='text' 
          placeholder='Email'
          name='email'
          onChange={inputHandler}
          className='border-doted placeholder:italic placeholder:text-slate-400 placeholder:text-sm sm:placeholder:text-md border mt-3 p-2 rounded-lg'/>

          <input 
            type='text' 
            placeholder='Password'
            name='password'
            onChange={inputHandler}
            className='border-doted placeholder:italic placeholder:text-slate-400 placeholder:text-sm sm:placeholder:text-md border mt-3 p-2 rounded-lg'
          />
          <button className='border-dashed border-2 rounded-lg px-4 py-2 font-semibold w-4/5 md:w-full'>SignUp</button>
  
          <h2 className='font-mono font-semibold text-sm sm:text-md text-slate-400 mt-2'>
          All ready have an account? 
          <Link to={'/login'}>
          <span className='text-slate-600'>Login</span>
          </Link>
          </h2>
        </form>
        
      </div>
    
    </div>
  )
}

export default Signup