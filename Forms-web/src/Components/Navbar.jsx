import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList} from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'


const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  const [userData, setuserData] = useState();
  const [userStatus, setuserStatus] = useState(false)
  
  useEffect(()=>{
    if (location.pathname === '/login' || location.pathname === '/signup' ) setshow(false);
    else setshow(true);
  },[location])

  console.log("Nav.js");

  useEffect(()=>{
    
    const authListner = () =>{
      let userDat =  localStorage.getItem('accessToken');
      console.log("inside useEffect !!");
      if (userDat) {
      const decodedData = jwtDecode(userDat);
      const { username, id} = decodedData.user; 
      setuserData({
        username:username,
        id : id
      })
      console.log(userData);
      setuserStatus(true);
      }
    }
          // Attach event listener
    window.addEventListener('authChange', authListner);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('authChange', authListner);
    };
    
  },[])

  console.log(userData);
  console.log(userStatus);

  const logoutUser = () =>{
    localStorage.removeItem("accessToken");
    setuserStatus(false)
    setuserData({
    username: "",
    id : ""
    })
    navigate('/login');
  }

  return (
    <>
    {show &&
    <nav className='h-12 flex items-center shadow-sm text-gray-600 justify-around mb-2'>
      <FontAwesomeIcon icon={faTableList} className='mt-2' />
      <Link to={'/'}>
        <span>FORMS</span>
      </Link>
      {
        userStatus == false ?
        <div className='flex gap-4'>
        <Link to={'/login'}>
          <button className='text-black rounded-sm outline outline-offset-2 outline-1 outline-slate-400 font-medium px-2'>Login</button>
        </Link>
        <Link to={'/signup'}>
          <button className=' text-black rounded-sm'>Signup</button>
        </Link>
      </div>
      :
      <div className='flex flex-row gap-4 h-full items-center'>
        <p className='font-mono font-semibold'>{userData.username}</p>
        <hr className='w-0 h-3/6 border-solid border border-slate-500'/>
        <button 
        className='text-black rounded-sm outline outline-offset-2 outline-1 outline-slate-400 font-medium px-2'
        onClick={logoutUser}
        >logOut</button>
      </div>
      }
      
    </nav>
    }
    </>
  )
}

export default Navbar