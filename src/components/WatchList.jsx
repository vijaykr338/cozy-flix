import React from 'react'
import WatchListHero from './WatchListHero'
import WatchListActions from './WatchListActions'
import List from './List'
import { useEffect, useState } from 'react'

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
