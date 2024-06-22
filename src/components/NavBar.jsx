import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/authContext'
import { doSignOut } from '../../firebase/auth'

const NavBar = () => {

  const navigate = useNavigate()
  const {useLoggedIn } = useAuth()

  return (
    <div className='font-playwright'>
      <div className="navbar bg-black bg-opacity-50">
  <div className="flex-1">

    <Link to="/" className="btn btn-ghost xl:text-xl">Cozy Flix</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="space-x-3">
        
     
    <Link to="/watchlist"><button className='btn'>Watchlist</button></Link> 
    <Link to="/watchlist"><button className='btn' onClick={()=>{
          doSignOut().then(()=> {navigate('/login')})
        }}>Sign Out</button></Link> 
    </div>
    <div className="dropdown dropdown-end">
      
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        
        <li className='text-center cursor-pointer' >Log Out</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
