import React from 'react'
import FullPage from './FullPage'
import TopCasts from './TopCasts'
import Videos from './Videos'
import Feed from './Feed'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTop from './ScrollToTop'

const MoreDetail = () => {



  const {id} = useParams();

  const [movieDetail, setMovieDetail] = useState([])
  
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
    }
  };


const getMovieDetail = async () => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    const data = await response.json();
    setMovieDetail(data)
    console.log(data)
  }catch(err){
    console.log("Error Happened", err)
  }
  <ScrollToTop/>
}



useEffect(()=>{
getMovieDetail()

},[id])

  return (
    <div>
    <NavBar></NavBar>
      <FullPage movieDetail={movieDetail} id={id}></FullPage>
      <TopCasts id={id}></TopCasts>
      <Feed type="similar" id={id}></Feed>
      <Footer></Footer>
    </div>
  )
}

export default MoreDetail
