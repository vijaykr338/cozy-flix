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
        <div className='border-2 mx-64 rounded-2xl my-8'>
           
            <div className='flex'>

                <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="baka" className='h-64 mx-8 my-8' />

                <div className='my-16'>

                    <div className='flex justify-between'>
                    <Link to={`/more-detail/${movieData.id}`}>
                        <h1 className='text-4xl font-bold hover:underline'>{movieData.title}</h1>
                    </Link> 
                    <ImCross onClick={()=>removeFromWatchlist(movieData.id)} className='cursor-pointer relative mx-16 h-12 w-12'/>
</div>
                    <div className='flex space-x-3 my-4'>
                        <h1>{formattedDate}</h1>
                        <h1>{hours}h {minutes}m</h1>

                    </div>
                    <div className='flex'>
                        < FaStar className='text-yellow-300 my-1' />
                        <p className='mx-2 text-white '>{movieData.vote_average}</p>
                    </div>

                    <p className='my-3 px-3'>{movieData.overview}</p>


                </div>
            </div>




        </div>
    )
}

export default Card
