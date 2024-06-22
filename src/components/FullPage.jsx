import React from 'react'
import { useState, useEffect } from 'react'
import GenreBox from './GenreBox'
import Rating from './Rating'
import hero2 from '../assets/hero2.jpg'


const FullPage = ({id, movieDetail}) => {



 

  const dateString = movieDetail.release_date
  const date = new Date(dateString)
  const formattedDate = `${date.toLocaleDateString('default', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`

  const year = new Date(dateString).getFullYear();
  const rating = movieDetail.vote_average?.toFixed(1);

  const hours = Math.floor(movieDetail.runtime / 60);
  const minutes = movieDetail.runtime % 60;
  

  return (
    <div>
      
    <div className='mx-10 my-9 xl:flex' >
      <img className='' src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt="" />
      <div className='xl:mx-14 my-6'>
        <div className='flex'>
        <h1 className='xl:text-5xl text-3xl my-3 '>{movieDetail.original_title}</h1>
        <Rating rating={rating}></Rating>
        </div>
        <div className="genres">
          {movieDetail.genres?.map((movie)=>{
            return(
            <GenreBox key={movie.id} genre={movie.name}/>
          )
            
          })}
        </div>
        <div className="rating-trailer">
          {/* will put rating here soon */}
          

        </div>
          
        <h1 className='xl:text-3xl text-xl font-bold my-3'>Overview</h1>
        <p>{movieDetail.overview}</p>
<hr style={{ borderTop: "1px solid white", width: "100%" }} className='my-4' />
         <div className='flex my-5 justify-around gap-3'>
         
          <div> <h1 className='font-bold xl:text-2xl'>Status</h1>  <span className='xl:text-xl'>{movieDetail.status}</span> </div>
          
          <div> <h1 className='font-bold xl:text-2xl'>Release Date</h1>  <span className='xl:text-xl'>{formattedDate}</span> </div>
          <div> <h1 className='font-bold xl:text-2xl'> Runtime</h1> <span className='xl:text-xl'>{hours}h {minutes}m</span> </div>
          <hr style={{borderTop: "1px solid white"}} />
          
          </div> 
      </div>
         
    </div>
    </div>
  )
}

export default FullPage
