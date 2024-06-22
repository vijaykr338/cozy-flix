import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/authContext'
import { doSignOut } from '../../firebase/auth'

const NavBar = () => {

  const navigate = useNavigate()
  const {useLoggedIn } = useAuth()

  return (
    <div className='font-playwright'>
      <div className="navbar bg-black bg-opacity-50 ">
  <div className="flex-1">

    <Link to="/main" className="btn btn-ghost xl:text-xl text-sm">Cozy Flix</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="space-x-3">
        
     
    <Link to="/watchlist"><button className='bg-black xl:btn px-2 py-2 text-sm'>Watchlist</button></Link> 
    <Link to="/watchlist"><button className='bg-black xl:btn px-2 py-2 text-sm' onClick={()=>{
          doSignOut().then(()=> {navigate('/login')})
        }}>Sign Out</button></Link> 
    </div>
    <div className="dropdown dropdown-end">
      
     
        
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
