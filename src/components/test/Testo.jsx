import React, { useState } from 'react'
import { useEffect } from 'react';
const Feed = () => {

    const [movieData, setMovieData] = useState([])
    const [imageurl, setImageUrl] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
        }
      };
    
    const getMovieDetails = async () => {
        try{
            const response = await fetch(' https://api.themoviedb.org/3/tv', options)
            const data = await response.json();
            console.log(data)
            
        } catch(error){
        console.log("Some Error Occurred", error);
    }
    }

    useEffect(()=>{
        getMovieDetails();
    }, [])
    

  return (
    <div className='my-5 mx-10'>
      <h1 className='text-white text-3xl my-6'>Trending</h1>
      <div className='list-none flex space-x-9 '>
    </div>
    </div>
  )
}

export default Feed
