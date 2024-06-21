import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { WatchListContext } from './context/WatchListContext';


const Search = ({ query }) => {

  const [movieData, setMovieData] = useState([])
  const [watchList, setWatchList] = useContext(WatchListContext)

  const addToWatchList = (id) => {
    // this is how you append to an array
    setWatchList((old) => [...old, id]);
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
    }
  };



  const getSearchDetails = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
      const data = await response.json()
      console.log(data)
      const results = data.results.slice(0, 8);
      console.log(results)
      setMovieData(results)
    } catch (error) {
      console.log(error, "Error happened")
    }
  }

  useEffect(() => {
    getSearchDetails()
  }, [query])


  return (
    <div className='my-10 mx-5 font-space'>
      <h1 className='text-white text-3xl my-6'>The Search Results -</h1>
      <div className='list-none flex flex-wrap justify-center gap-x-9 xl:gap-x-24'>
        {
          movieData.map((movie) => {
            const date = new Date(movie.release_date)
            const formattedDate = `${date.toLocaleDateString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
            const rating = movie.vote_average.toFixed(1);

            const percentage = rating * 10



            const getRatingColor = (rating) => {
              if (rating >= 7) return 'green';
              if (rating >= 4) return '#F28C28';

              return 'red';
            }
            return (
              <div className='w-28 xl:w-72' key={movie.id}>
                <button onClick={() => addToWatchList(movie.id)}>
                  <FaHeart className='text-red-500 h-11 w-auto relative top-12 z-10 hover:h-15' /></button>
                <li className=''>

                  <Link to={`/more-detail/${movie.id}`}>

                    <img className='w-36 xl:w-72 h-auto hover:opacity-80 cursor-pointer' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

                  </Link>
                  <div className="radial-progress xl:text-xl text-black text-xs  relative xl:bottom-10 bottom-5 bg-white" style={{
                        "--value": `${percentage}`,
                        "color": getRatingColor(rating),
                        "--thickness": "4px",
                        "--size": "3rem"

                      }} role="progressbar">{rating}</div>

                </li>
                <div className='relative bottom-3 text-sm'>
                  <li className='font-bold' >{movie.original_title}</li>
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

export default Search
