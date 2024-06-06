import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import axios from "axios"
import {jwtDecode} from "jwt-decode"

const List = () => {

  const [contactData, setcontactData] = useState([])

  useEffect(()=>{
    let userDat =  localStorage.getItem('accessToken');
    if (userDat) {
    const decodedData = jwtDecode(userDat);
    const { username, id} = decodedData.user; 
    
    async function getter(){
      const contactList = await axios.get(`http://localhost:5000/contact/getcontacts`,{
        params:{
        usrId : id,
        username : username
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

  async function deleteHandler(a){
    const deletedContact = await axios.delete(`http://localhost:5000/contact/deletecontact/${a}`,{
      Headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    console.log(a);
    // const deleteContact = await axios.delete();
  }

  return (
    <div className='h-screen'>
      <div className='flex flex-col items-center'>
        <h1 className='mt-10 text-center font-black'>LIST OF <span className='bg-black text-white p-2 rounded-r-md'>DATA</span></h1>
        <hr className='mt-6 w-4/5'/>
      </div>
      <div>
      <ul className='flex flex-col gap-5 items-center mt-10'>
        {contactData.map((data)=>(
          <li 
            key={data.id}
            className='border-solid border w-4/5 h-10 px-1 sm:w-3/4 h-14 px-6 py-4 md:w-3/5 h-17   rounded-md font-bold flex flex-row justify-between'>
            <div className='flex felx-row gap-2 sm:gap-6 items-center'>
              <FontAwesomeIcon icon={faUserCircle} className='text-sm sm:text-md md:text-2xl'/>
              <p className='text-sm font-medium sm:text-md font-semibold md:text-xl font-bold'>{data.cont_name}</p>
            </div>

            {/* Operation on data */}
            <div className='flex flex-row gap-2 items-center'>
              <Link to={'/detail'} state={data.id}>
              <FontAwesomeIcon icon={faEye} className='text-sm sm:text-md md:text-xl'/>
              </Link>
              <hr className='h-9 mr-2 ml-2 bg-black border'/>
              <Link to={'/update'} state={data.id}>
                <button className='text-sm p-2 font-medium border-solid border px-2 py-1 rounded-md h-max'>Edit</button>
              </Link>
              <button 
              className='text-sm p-2 text-red-500 font-semibold border-solid border border-red-400 px-3 py-1 rounded-md h-max'
              onClick={()=>deleteHandler(data.id)}>
              Delete</button>
            </div>
          </li>
        ))}
       </ul>
      </div>
    </div>
  )
}

export default List;