import React from 'react'
import { useState, useEffect } from 'react'
import GenreBox from './GenreBox'
import Rating from './Rating'
import hero2 from '../assets/hero2.jpg'


const FullPage = ({id, movieDetail}) => {



  const [credits, setCredits] = useState([])
 

  const dateString = movieDetail.release_date
  const date = new Date(dateString)
  const formattedDate = `${date.toLocaleDateString('default', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`

  const year = new Date(dateString).getFullYear();
  const rating = movieDetail.vote_average?.toFixed(1);

  const hours = Math.floor(movieDetail.runtime / 60);
  const minutes = movieDetail.runtime % 60;
  

const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetail.belongs_to_collection?.backdrop_path}`;
console.log(`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`)

  return (
    <div>
      
    <div className='mx-10 my-9 flex' >
      <img className='' src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt="" />
      <div className='mx-14'>
        <h1 className='text-5xl my-3 '>{movieDetail.original_title}({year})</h1>
        <div className="genres flex space-x-3">
          {movieDetail.genres?.map((movie)=>{
            return(
            <GenreBox key={movie.id} genre={movie.name}/>
          )
            
          })}
        </div>
        <div className="rating-trailer">
          {/* will put rating here soon */}
          <Rating rating={rating}></Rating>

        </div>
          
        <h1 className='text-3xl my-3'>Overview</h1>
        <p>{movieDetail.overview}</p>

         <div className='flex my-5 justify-around'>
         <hr style={{borderTop: "1px solid white"}} />
          <div> <h1 className='font-bold text-2xl'>Status</h1>  <span className='text-xl'>{movieDetail.status}</span> </div>
          
          <div> <h1 className='font-bold text-2xl'>Release Date</h1>  <span className='text-xl'>{formattedDate}</span> </div>
          <div> <h1 className='font-bold text-2xl'> Runtime</h1> <span className='text-xl'>{hours}h {minutes}m</span> </div>
          <hr style={{borderTop: "1px solid white"}} />
          
          </div> 
      </div>
         
    </div>
    </div>
  )
}

export default FullPage