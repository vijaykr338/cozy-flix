import React, { useState } from 'react'
import { useEffect } from 'react';



const Feed = ({type}) => {

    const [movieData, setMovieData] = useState([])
    
    const [title, setTitle] = useState("");


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
        }
      };
    
    const getMovieDetails = async () => {
        try{
            let response;

          if(type == "top-rated"){
            setTitle("Top-Rated")
            response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US', options)
          }
          else if(type == "upcoming"){
            setTitle("Upcoming")
            response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US', options)
          }
          else if(type == "trending"){
            setTitle("Trending")
            response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
          }
            const data = await response.json();
            console.log(data.results[0].id)
            const baseUrl = "https://image.tmdb.org/t/p/w500"
           
            const movie = data.results.slice(0, 5); 
            
            const urls = movie.map((mov)=>`${baseUrl}${mov.poster_path}`)
            console.log(movie)
            
            setMovieData(movie)
         
          
            
        } catch(error){
        console.log("Some Error Occurred", error);
    }
    }

    useEffect(()=>{
        getMovieDetails();
    }, [])
    

  return (
    <div className='my-10 mx-10 font-space'>
      <h1 className='text-white text-3xl my-6'>{title}</h1>
      <div className='list-none flex justify-center space-x-9 '>
        {
          movieData.map((movie)=>{
            const date = new Date(movie.release_date)
            const formattedDate = `${date.toLocaleDateString('default', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`
            const rating = movie.vote_average.toFixed(1);
            
            const percentage = rating*10


            
    const getRatingColor = (rating) => {
      if(rating >= 7) return 'green';
      if(rating >= 4) return '#F28C28';

      return 'red';
      }
    

            
            return(
              <div key={movie.id}> 
                <li><img className='w-64 h-auto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                
                <div className="radial-progress text-2xl text-black w-20 h-20 relative bottom-10 bg-white" style={{
                  "--value":`${percentage}`,
                  "color": getRatingColor(rating)
                  
                  }} role="progressbar">{rating}</div>
                
                </li>
                <div className='relative bottom-3'>
              <li className='font-bold'>{movie.original_title}</li>
              <li>{formattedDate}</li>
              </div>
              </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default Feed
