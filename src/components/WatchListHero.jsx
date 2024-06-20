import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import watclist from '../assets/watclist.jpg'
import hero2 from '../assets/hero2.jpg'

const WatchListHero = () => {
  return (
    <div className='bg-cover relative h-96 items-center' style={{backgroundImage: `url(${watclist})`, backgroundSize: 'cover'}}>
     <NavBar></NavBar>
    <div className='absolute pointer-events-none inset-0 bg-gradient-to-t from-black to-transparent' ></div>
    <div className='z-10'>   
       <h1 className='text-white font-playwright z-20 p-2 font-bold text-7xl mx-48 my-16 relative' style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.75)'}}>Watchlist</h1>    
</div>

   
   </div>

  )
}

export default WatchListHero
