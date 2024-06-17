import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-black bg-opacity-50">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Movie-Mania</a>
  </div>
  <div className="flex-none gap-2">
    <div className="space-x-3">
        
     <button className='btn '>TV Shows</button>
     <button className='btn'>Watchlist</button>
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
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
