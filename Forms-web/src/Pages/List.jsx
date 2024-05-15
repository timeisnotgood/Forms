import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import axios from "axios"
import {jwtDecode} from "jwt-decode"

const List = () => {

  const [contactData, setcontactData] = useState([])

  useEffect(()=>{
    console.log("List Component");

    let userDat =  localStorage.getItem('accessToken');
    if (userDat) {
    const decodedData = jwtDecode(userDat);
    const { username, id} = decodedData.user; 
    console.log(username, id);
    
    async function getter(){
      const contactList = await axios.get(`http://localhost:5000/contact/getcontact`,{
        params:{
        usrId : "22",
        username : "username"
        }
      },{
        Headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      setcontactData([...contactList.data.data])
      console.log(contactList.data.data);
    }
    getter();
  }
  },[])

  return (
    <>
    <div className='h-screen'>
      <div>
        <h1 className='mt-10 text-center font-black'>LIST OF <span className='bg-black text-white p-2 rounded-r-md'>DATA</span></h1>
        <hr className='mt-4'/>
      </div>
      <div>
      <ul className='flex flex-col gap-5 items-center mt-10'>
        {contactData.map((data)=>(
          <li 
            key={data.id}
            className='border-solid border-2 w-2/3 px-6 py-4 rounded-md font-bold flex flex-row justify-between'>
            <div className='flex felx-row gap-6'>
              <FontAwesomeIcon icon={faUserCircle} className='mt-2'/>
              {data.cont_name}
            </div>

            {/* Operation on data */}
            <div className='flex flex-row gap-2'>
              <Link to={'/detail'} state={data.id}>
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
    </>

  )
}

export default List;