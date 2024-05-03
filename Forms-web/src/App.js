import React, { useEffect, useState } from 'react'
import List from './Pages/List';
import { Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Update from './Pages/Update';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/detail' element={<Details/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App