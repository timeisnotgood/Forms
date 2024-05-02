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
      <div className='border-solid border w-2/3 h-2/3 rounded-3xl shadow-lg box-border p-5 flex flex-col flex-wrap'>
        <label className='block font-mono font-semibold text-4xl w-36 text-center'>UserName</label>
        {obj.name}
        <label className='block border-solid border w-36 text-center' >FatherName</label>
        {obj.fatherName}
        <label className='block border-solid border w-36 text-center' >Age</label>
        {obj.age}
        <label className='block border-solid border w-36 text-center' >Cast</label>
        {obj.cast}
        <label className='block border-solid border w-36 text-center'>Degree</label>
        {obj.degree}
        <label className='block border-solid border w-36 text-center'>Cgpa</label>
        {obj.cgpa}
      </div>
    </div>
  )
}

export default Details