import React from 'react'

const Details = () => {

  const obj = {
    name:"gokul",
    fatherName :"kanna",
    age:"22",
    cast:"bc",
    degree:"BSc",
    cgpa:"7.4"
  }

  return (
    <div className='h-screen flex flex-col items-center gap-6'>
      <div className='flex flex-col w-full items-center'>
        <h1 className='mt-10 text-center font-black'>USER <span className='bg-black text-white p-2 rounded-r-md'>DETAIL'S</span></h1>
        <hr className='mt-6 w-4/5'/>
      </div>
      {/* Main element starts here */}
      <div className='border-solid border w-2/3 h-2/3 rounded-3xl shadow-lg box-border p-5'>
        <label>UserName</label>
        {obj.name}
        <label>FatherName</label>
        {obj.fatherName}
        <label>Age</label>
        {obj.age}
        <label>Cast</label>
        {obj.cast}
        <label>Degree</label>
        {obj.degree}
        <label>Cgpa</label>
        {obj.cgpa}
      </div>
    </div>
  )
}

export default Details