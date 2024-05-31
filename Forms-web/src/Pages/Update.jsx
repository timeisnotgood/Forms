import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Update = () => {

  const location = useLocation();
  const id = location.state;
  const [contactData, setcontactData] = useState({
    id :"",
    contactName : "",
    contactFatherName : "",
    contactCast : "",
    contactAge : "",
    contactCgpa : "",
    contactDegree : "",
    userId : ""
  })

  useEffect(()=>{
    async function getter(){
      const getUser = await axios.get(`http://localhost:5000/contact/getcontact/${id}`,{
        Headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      const data = await getUser.data;
      setcontactData({
        id :data.id,
        contactName : data.cont_name,
        contactFatherName : data.cont_fathername,
        contactCast : data.cont_cast,
        contactAge : data.cont_age,
        contactCgpa : data.cont_cgpa,
        contactDegree : data.cont_degree,
        userId : data.usr_id
      })
    }
    getter();
  },[])

  async function submitHandler(e){
    e.preventDefault(); 

  }


  return (
    <div className='h-screen flex flex-col items-center gap-6'>
      <div className='flex flex-col w-full items-center'>
        <h1 className='mt-10 text-center font-black'>UPDATE <span className='bg-black text-white p-2 rounded-r-md'>DATA</span></h1>
        <hr className='mt-6 w-4/5'/>
      </div>
      {/* Main element starts here */}
      <form 
      className='border-solid border w-2/3 h-2/3 rounded-3xl shadow-lg box-border p-5 flex flex-col flex-wrap'
      onSubmit={submitHandler}>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>ContactName:</label>
        <input 
            className='mt-5 font-mono text-center text-2xl text-slate-600'
            type='text' 
            value={contactData.contactName}
            // onChange={e =>{setcontactData({})}}
            />
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >FatherName</label>
        <input
            className='mt-5 font-mono text-center text-2xl text-slate-600'
            type='text' value={contactData.contactFatherName}/>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >Age</label>
        <input
            className='mt-5 font-mono text-center text-2xl text-slate-600 mb-2'
            type='text' value={contactData.contactAge}
        />
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-3' >Cast</label>
        <input 
            className='mt-5 font-mono text-center text-2xl text-slate-600'
            type='text' value={contactData.contactCast}
            />
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Degree</label>
        <input 
            className='mt-5 font-mono text-center text-2xl text-slate-600'
            type='text' value={contactData.contactDegree}
            />
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Cgpa</label>
        <input 
            className='mt-5 font-mono text-center text-2xl text-slate-600'
            type='text' value={contactData.contactCgpa}
            />
        <button className='bg-green-800 w-max px-2 py-1 rounded-md text-white'>Update</button>
      </form>
    </div>
  )
}

export default Update