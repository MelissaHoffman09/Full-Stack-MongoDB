import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'

const Navbar = () => {
  const { logout, token } = useContext(UserContext)
  return (
    <div className = "navbar">
      {token && <Link to='/profile'>Profile</Link>}
      <br />
      <Link to='/campaign'>Campaign</Link>
      <br />
      {token && <button onClick = {logout}>Logout</button>}
    </div>
  )
}

export default Navbar;