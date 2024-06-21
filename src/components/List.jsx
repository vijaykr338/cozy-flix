import React, { useEffect, useState } from 'react'
import Card from './Card'
import { WatchListContext } from './context/WatchListContext'
import { useContext } from 'react'

const List = () => {

  const [watchList, setWatchList] = useContext(WatchListContext);

  const [movieDetail, setMovieDetail] = useState([])



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
    }
  };


  const getMovieDetails = async () => {
    try {
      const movieDetails = await Promise.all(
        watchList.map(async (id) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
          const data = await response.json();
          return data;
        })
      );

      setMovieDetail(movieDetails)
      
    } catch (err) {
      console.log("Error Happened", err)
    }

  }

  useEffect(() => {
    getMovieDetails();
  }, [watchList])


  console.log(movieDetail)

  return (
    <div className=''>

      {
        movieDetail.map((movie) => {
          return (
            <Card movieData={movie} ></Card>
          )
        })
      }

    </div>
  )
}

export default List
