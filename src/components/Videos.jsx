import React from 'react'
import { useEffect, useState } from 'react';


const Videos = () => {
    const [trailerKey, setTrailerKey] = useState(null)
    const [videoData, setVideoData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
        }
    };

    const getMovieData = async ()=>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/573435/videos`, options)
            const data = await response.json();
            console.log(data)

    if (data.results.length > 0) {
        setTrailerKey(data.results);
      }
        }catch(error){
            console.log("Error happeend", error)
        }
    }

    useEffect(()=>{
        getMovieData()
    }, [])



  return (
    <div>
      <h1>Official Videos</h1>
      {trailerKey && (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )}
    </div>
  )
}

export default Videos
