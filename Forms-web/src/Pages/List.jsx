import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHouse, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const List = () => {

  const data = [{
    name:"gokul",
    fatherName :"kanna",
    age:"22",
    cast:"bc",
    degree:"BSc",
    cgpa:"7.4"
  },{
    name:"Lissan",
    fatherName :"samy",
    age:"21",
    cast:"Bc",
    degree:"BSc",
    cgpa:"6.2"
  },{
    name:"Lissan",
    fatherName :"samy",
    age:"21",
    cast:"Bc",
    degree:"BSc",
    cgpa:"6.2"
  }]
  return (
    <div className='h-screen'>
      <div>
        <h1 className='mt-10 text-center font-black'>LIST OF <span className='bg-black text-white p-2 rounded-r-md'>DATA</span></h1>
        <hr className='mt-4'/>
      </div>
      <div>
      <ul className='flex flex-col gap-5 items-center mt-10'>
        {data.map((name, index)=>(
          <li 
            key={index}
            className='border-solid border-2 w-2/3 px-6 py-4 rounded-md font-bold flex flex-row justify-between'>
            <div className='flex felx-row gap-6'>
              <FontAwesomeIcon icon={faUserCircle} className='mt-2'/>
              {name.name}
            </div>
            <div className='flex flex-row gap-2'>
              <Link to={'/detail'}>
              <FontAwesomeIcon icon={faEye} className='mt-2'/>
              </Link>
              <hr className='h-9 mr-2 ml-2 bg-black border'/>
              <Link to={'/update'}>
                <button className='border-solid border text-sm p-2 rounded-md font-semibold'>Edit</button>
              </Link>
              <button className='text-sm p-2 rounded-md font-semibold'>Delete</button>
            </div>
          </li>
        ))}
       </ul>
      </div>
    </div>
  )
}

export default List