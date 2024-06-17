import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Feed from './Feed'

import Footer from './Footer'

const MainPage = () => {
  return (
    <div>
    
    <Hero></Hero>
    <div className='flex flex-col space-y-4 mt-[-150px]'>
    <Feed type="trending"></Feed>
    <Feed type="upcoming"></Feed>
    <Feed type="top-rated"></Feed></div>
    <Footer/>
    </div>
  )
}

export default MainPage
