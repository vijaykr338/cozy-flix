import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { WatchListContext } from './context/WatchListContext';


const Feed = ({ type, id, query }) => {

  const [movieData, setMovieData] = useState([])
  const [title, setTitle] = useState("");
  const [watchList, setWatchList] = useContext(WatchListContext)
  const [searching, setSearching] = useState(false)
  const [clickedHearts, setClickedHearts] = useState([]);

  const addToWatchList = (id) => {
    setWatchList((old) => [...old, id]);
    // Toggle the clicked state for the heart icon
    setClickedHearts((oldClicked) =>
      oldClicked.includes(id) ? oldClicked.filter((movieId) => movieId !== id) : [...oldClicked, id]
    );
  };


    useEffect(()=>{
       if(query !== "" ){
      setSearching(true);
    }
    else{
      setSearching(false)
    }
    },[query])
   
    



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
    }
  };

  const getMovieDetails = async () => {
    try {
      let response;

      if (type === "top-rated") {
        setTitle("Top-Rated")
        response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US', options)
      }
      else if (type === "upcoming") {
        setTitle("Upcoming")
        response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US', options)
      }
      else if (type === "trending") {
        setTitle("Trending")
        response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=&language=en-US', options)
      }
      else if (type === "similar") {
        setTitle("Simiar Movies")
        response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
      }
      const data = await response.json();


      const movie = data.results.slice(0, 8);

      setMovieData(movie)



    } catch (error) {
      console.log("Some Error Occurred", error);
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    getMovieDetails();

  }, [id])




  return (
    <div>
      {
        !searching && <div className='my-10 mx-5 font-space'>
          <h1 className='text-white text-3xl my-6'>{title}</h1>
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
                   <FaHeart
            onClick={() => addToWatchList(movie.id)}
            style={{
              color: clickedHearts.includes(movie.id) ? 'red' : 'grey',
              cursor: 'pointer',
            }}
            className='xl:h-10 xl:w-10 h-5 w-5 relative xl:top-9 top-5 z-10'
          />
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
                      <li className='font-bold ' >{movie.original_title}</li>
                      <li>{formattedDate}</li>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Feed
