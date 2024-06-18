import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import watclist from '../assets/watclist.jpg'
import hero2 from '../assets/hero2.jpg'

const WatchListHero = () => {
  return (
   <div className='bg-cover relative h-96 flex items-center' style={{backgroundImage: `url(${watclist})`, backgroundSize: 'cover'}}>
    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
    <h1 className='text-white font-playwright p-2 font-bold text-7xl mx-48 z-10' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Watchlist</h1>
    
   
   </div>

  )
}

export default WatchListHero
