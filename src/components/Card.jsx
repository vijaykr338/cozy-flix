import React from 'react'
import dummy from '../assets/dummy.jpg'
import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useContext } from 'react';
import { WatchListContext } from './context/WatchListContext';


const Card = ({ movieData }) => {
    
    const [watchList, setWatchList] = useContext(WatchListContext)

    const removeFromWatchlist = (id) => {
        setWatchList(prevWatchList => prevWatchList.filter(item => item !== id));
        console.log(watchList)
      };
      console.log(watchList)
    

    const dateString = movieData.release_date
    const date = new Date(dateString)
    const formattedDate = `${date.toLocaleDateString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`

    const year = new Date(dateString).getFullYear();
    const rating = movieData.vote_average?.toFixed(1);

    const hours = Math.floor(movieData.runtime / 60);
    const minutes = movieData.runtime % 60;

    
    

    return (
        <div className='border-2 xl:mx-64 xl:rounded-2xl rounded-lg mx-5 xl:my-8 my-4'>
           
            <div className='flex'>

                <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} 
                 alt="baka"
                 className='xl:h-64 h-48 mx-4 my-4 xl:mx-8 xl:my-8'
                  />

                <div className='xl:my-16 my-8'>

                <div className='flex justify-between items-center w-full'>
    <Link to={`/more-detail/${movieData.id}`} className='flex-1'>
        <h1 className='xl:text-4xl text-xl font-bold hover:underline truncate'>{movieData.title}</h1>
    </Link>
    <ImCross onClick={() => removeFromWatchlist(movieData.id)} 
        className='flex-shrink-0 cursor-pointer relative xl:mx-34 xl:h-12 xl:w-12 mx-8 h-5 w-5'
    />
</div>
                    <div className='flex text-sm space-x-3 my-4'>
                        <h1>{formattedDate}</h1>
                        <h1>{hours}h {minutes}m</h1>

                    </div>
                    <div className='flex text-sm'>
                        < FaStar className='text-yellow-300 my-1' />
                        <p className='mx-2 text-white '>{movieData.vote_average}</p>
                    </div>

                   

                </div>
                
            </div>


 <p className='my-3 px-3 text-sm xl:text-lg overflow-clip'>{movieData.overview}</p>

        </div>
    )
}

export default Card
