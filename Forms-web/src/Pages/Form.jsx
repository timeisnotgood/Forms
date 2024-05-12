import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'


const Form = () => {
    
  const [dataholder, setdataholder] = useState([]);
  const [data, setdata] = useState({
    name:"",
    fatherName :"",
    age:"",
    cast:"",
    degree:"",
    cgpa:""
  });

  function submitHandler(e){

    e.preventDefault();

    let userDat =  localStorage.getItem('accessToken');
    if (userDat){
      const decodedData = jwtDecode(userDat);

      const { username, id} = decodedData.user;
      console.log(id);

      const contData = axios.post(`http://localhost:5000/contact/addcontact`,{
        name:data.name,
        fatherName :data.fatherName,
        age:data.age,
        cast:data.cast,
        degree:data.degree,
        cgpa:data.cgpa,
        usrId:id
      },{
        headers:{
          "Content-Type":"application/json",

        }
      })
    }
  }

  function inputHandler(e){
    setdata({...data, [e.target.name] : e.target.value});
  }
  
  return (
    <>
      {/* <Navbar/> */}
      <div className='w-full h-screen flex flex-col items-center'>
          <h1 className='mt-10 text-center font-black'>Enter 
            <span className='bg-black text-white p-2 rounded-r-md'>DATA</span>
          </h1>
          <form onSubmit={submitHandler} className='grid grid-cols-2 gap-3 w-2/3 h-2/3 mt-10'>
          <div>
          <label htmlFor="username" className="block font-medium text-gray-900">
                  Username
          </label>
          <input 
          type='text' 
          name='name' 
          onChange={inputHandler}
          autoComplete="username"
          className="flex rounded-md shadow-sm mt-3 w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
          />
          </div>
          <div>
          <label className="block font-medium text-gray-900">FatherName</label>
          <input type='text' name='fatherName' onChange={inputHandler}
            className="flex rounded-md shadow-sm mt-3 w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
          />
          </div>
          <div>
            <label className="block font-medium text-gray-900">Age</label>
            <input type='text' name='age' onChange={inputHandler}
              className="flex rounded-md shadow-sm mt-3 w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-900">Cast</label>
            <input type='text' name='cast' onChange={inputHandler}
              className="flex rounded-md shadow-sm mt-3 ring-1 w-full ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-900">
              Degree
            </label>
            <input type='text' name='degree' onChange={inputHandler}
              className="flex rounded-md shadow-sm mt-3 ring-1 ring-inset ring-gray-300 w-full focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-900">
              Cgpa
            </label>
            <input type='text' name='cgpa' onChange={inputHandler}
              className="flex rounded-md shadow-sm mt-3 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 w-full max-w-64 px-1"
            />
          </div>
          <button className='rounded-md w-20 box-border bg-black text-white text-sm font-bold'>Submit</button>
        </form>
        {/* <ul>
          {dataholder.map((val, index)=>(
            <li key={index}>{val.name}</li>
          ))}
        </ul> */}
        {/* <List data={{data}}/> */}
      </div>
    </>
  )
}

export default Form