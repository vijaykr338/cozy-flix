import React from 'react'
import FullPage from './FullPage'
import TopCasts from './TopCasts'
import Videos from './Videos'
import Feed from './Feed'
import NavBar from './NavBar'
import Footer from './Footer'


const MoreDetail = () => {
  return (
    <div>
    <NavBar></NavBar>
      <FullPage></FullPage>
      <TopCasts></TopCasts>
      <Feed type="similar" id="573435"></Feed>
      <Footer></Footer>
    </div>
  )
}

export default MoreDetail
