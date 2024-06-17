import React from 'react'
import { useState, useEffect } from 'react'
import hero2 from '../assets/hero2.jpg'
import NavBar from './NavBar'
import watclist from '../assets/watclist.jpg'

const Watchlist = () => {
  return (
   <div className='bg-cover' style={{backgroundImage: `url(${watclist})`, backgroundSize: 'cover'}}>
    <h1 className='text-black text-5xl'>Watchlist</h1>

   </div>

  )
}

export default Watchlist
