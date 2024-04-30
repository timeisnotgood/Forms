import React, { useState } from 'react'

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

  function handler(e){
    e.preventDefault();
    setdataholder([...dataholder, {
      name:data.name,
      fatherName :data.fatherName,
      age:data.age,
      cast:data.cast,
      degree:data.degree,
      cgpa:data.cgpa
    }]);
    console.log(dataholder);
  }

  function updateValues(e){
    setdata({...data, [e.target.name] : e.target.value});
  }
  
  return (
    <div className='w-full h-screen flex justify-center'>
        <form onSubmit={handler} className='flex flex-col w-96 h-full  outline-1 gap-5'>
        <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
        </label>
        <input 
        type='text' 
        name='name' 
        onChange={updateValues}
        autoComplete="username"
        className="flex rounded-md shadow-sm w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
        />
        </div>
        <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">fatherName</label>
        <input type='text' name='fatherName' onChange={updateValues}
          className="flex rounded-md shadow-sm w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
        />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Age</label>
          <input type='text' name='age' onChange={updateValues}
            className="flex rounded-md shadow-sm w-full ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">cast</label>
          <input type='text' name='cast' onChange={updateValues}
            className="flex rounded-md shadow-sm ring-1 w-full ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Degree
          </label>
          <input type='text' name='degree' onChange={updateValues}
            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 w-full focus-within:ring-2 focus-within:ring-inset py-2 max-w-64 px-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            CGPA
          </label>
          <input type='text' name='cgpa' onChange={updateValues}
            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset py-2 w-full max-w-64 px-1"
          />
        </div>
        <button className='bg-black text-white rounded-md py-1 w-64'>Submit</button>
      </form>
      {/* <ul>
        {dataholder.map((val, index)=>(
          <li key={index}>{val.name}</li>
        ))}
      </ul> */}
      {/* <List data={{data}}/> */}
    </div>
  )
}

export default Form