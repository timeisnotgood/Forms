import React from 'react'
import Form from './Form'
import List from './List'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={'/form'}>Form</Link>
        <Link to={'/list'}>List</Link>
    </div>
  )
}

export default Home