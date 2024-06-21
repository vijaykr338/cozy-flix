import React from 'react'
import hero from '../assets/hero.jpg'
import hero2 from '../assets/hero2.jpg'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'

const Hero = ({query, setQuery}) => {

  
  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  
  return (
    <div className='bg-center relative font-playwright' style={{backgroundImage: `url(${hero2})`, backgroundSize: 'cover'}}>
       <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
       <NavBar className=""></NavBar>
        <div className='flex flex-col items-center my-36 h-96 text-white'>
            <h1 className='text-8xl font-bold my-8 z-10'>Welcome</h1>
      <p className='text-3xl z-10 my-4 font-space'>The ultimate destination for movie lovers. Explore Now!</p>
      <form onSubmit={submitHandler} className='z-10 w-96'>
          <input
           type="text" 
           placeholder="Search for a Movie or TV Show"
           className=" text-black input font-sans input-bordered w-full min-w-lg  bg-white rounded-full my-4" 
           onChange={(e)=>setQuery(e.target.value)}
           value={query}
           />
      </form>    
      
      </div>
      
    </div>
  )
}

export default Hero
