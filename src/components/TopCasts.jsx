import React from 'react'
import { useState, useEffect } from 'react'

const TopCasts = ({ id }) => {

    const [credits, setCredits] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
        }
    };



    const getCreditDetail = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/573435/credits`, options)
            const data = await response.json();
            console.log(data.cast)
            setCredits(data.cast)
        }
        catch (error) {
            console.log(error, "Error happened")
        }
    }

    useEffect(() => {
        getCreditDetail()
    }, [])


    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-3xl  my-4'>Top Casts</h1>
            <div className='flex space-x-12 mx-8'>
                {
                    credits.slice(0, 7).map((cast) => {
                        return (
                            <div>

                                <div className='w-48 h-48 overflow-hidden'>
                                    <img className='object-cover w-full h-full rounded-full' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
                                </div>


                            <div className='my-3'>
                            <h1 className='font-bold text-center'>{cast.name}</h1>
                            <h1 className='text-center'>{cast.character}</h1>
                            </div>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopCasts
