import React from 'react'
import WatchListHero from './WatchListHero'
import WatchListActions from './WatchListActions'
import List from './List'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'

const WatchList = () => {



  return (
    <div>
      
      <WatchListHero></WatchListHero>
      <WatchListActions/>
      <List/>
    </div>
  )
}

export default WatchList
