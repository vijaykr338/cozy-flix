import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Feed from './Feed'
import Search from './Search'
import Footer from './Footer'

const MainPage = () => {
  const [query, setQuery] = useState("")
  console.log(query)
  return (
    <div className='overflow-hidden'>
    
    <Hero query={query} setQuery={setQuery}></Hero>
    <div className='flex flex-col space-y-4 mt-[-150px]'>
    <Feed query={query} type="trending"></Feed>
    <Feed query={query} type="upcoming"></Feed>
    <Feed query={query} type="top-rated" ></Feed></div>
    <Search query={query}></Search>
    <Footer/>
    </div>
  )
}

export default MainPage
