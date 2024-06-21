import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/authContext'
import { doSignOut } from '../../firebase/auth'

const NavBar = () => {

  const navigate = useNavigate()
  const {useLoggedIn } = useAuth()

  return (
    <div>
      <div className="navbar bg-black bg-opacity-50">
  <div className="flex-1">

    <Link to="/" className="btn btn-ghost xl:text-xl">Movie-Mania</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="space-x-3">
        
     
    <Link to="/watchlist"><button className='btn'>Watchlist</button></Link> 
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        
        <li className='text-center cursor-pointer' onClick={()=>{
          doSignOut().then(()=> {navigate('/login')})
        }}>Log Out</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
