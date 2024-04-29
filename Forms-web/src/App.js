import React, { useEffect, useState } from 'react'
import List from './Pages/List';
import { Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/detail' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App