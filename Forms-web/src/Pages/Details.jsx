import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

  const location = useLocation();
  const [contact, setcontact] = useState({
    contactname : "",
    fathername : "",
    age : "",
    cast : "",
    degree : "",
    cgpa:""
  })
  const id = location.state;
  console.log(id);

  useEffect(()=>{
    async function getUser(){
      if(id){
        const specificUser = await axios.get(`http://localhost:5000/contact/getcontact/${id}`,{
            Headers:{
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        })
        setcontact({
          contactname: specificUser.data.cont_name,
          fathername : specificUser.data.cont_fathername,
          age : specificUser.data.cont_age,
          cast : specificUser.data.cont_cast,
          degree : specificUser.data.cont_degree,
          cgpa : specificUser.data.cont_cgpa,
        });

        console.log(specificUser.data);
      }else{
        throw new Error("SignIn to get contact")
      }

    }
    getUser();
  },[])
  // const obj = {
  //   name:"gokul",
  //   fatherName :"kanna",
  //   age:"22",
  //   cast:"bc",
  //   degree:"BSc",
  //   cgpa:"7.4"
  // }

  return (
    <div className='h-screen flex flex-col items-center gap-6'>
      <div className='flex flex-col w-full items-center'>
        <h1 className='mt-10 text-center font-black'>USER <span className='bg-black text-white p-2 rounded-r-md'>DETAIL'S</span></h1>
        <hr className='mt-6 w-4/5'/>
      </div>
      {/* Main element starts here */}
      <div className='border-solid border w-2/3 h-2/3 rounded-3xl shadow-lg box-border p-5 flex flex-col flex-wrap'>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>ContactName:</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{contact.contactname}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >FatherName</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{contact.fathername}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >Age</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600 mb-2'>{contact.age}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-3' >Cast</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{contact.cast}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Degree</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{contact.degree}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Cgpa</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{contact.cgpa}</p>
      </div>
    </div>
  )
}

export default Details