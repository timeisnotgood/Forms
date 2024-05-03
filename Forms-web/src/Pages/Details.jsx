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
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>UserName:</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{obj.name}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >FatherName</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{obj.fatherName}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2' >Age</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600 mb-2'>{obj.age}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-3' >Cast</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{obj.cast}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Degree</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{obj.degree}</p>
        <label className='block font-mono font-semibold text-4xl w-36 text-center mt-2'>Cgpa</label>
        <p className='mt-5 font-mono text-center text-2xl text-slate-600'>{obj.cgpa}</p>
      </div>
    </div>
  )
}

export default Details