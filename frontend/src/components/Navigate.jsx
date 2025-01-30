import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <div>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navigate