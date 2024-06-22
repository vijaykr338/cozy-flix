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
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
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
    }, [id])


    return (
         <div className='flex items-center flex-col'>
        <h1 className='text-3xl my-4'>Top Casts</h1>
        <div className='flex flex-wrap justify-center mx-8 gap-4'> {/* Adjusted for flex-wrap and spacing */}
            {
                credits.slice(0, 7).map((cast) => (
                    <div key={cast.id} className=' flex flex-col items-center'> {/* Adjusted width and added padding */}
                        <div className='xl:w-48 xl:h-48 w-20 h-20 overflow-hidden'>
                            <img className='object-cover w-full h-full rounded-full' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
                        </div>
                        <div className='my-3'>
                            <h1 className='font-bold text-xs text-center'>{cast.name}</h1>
                            <h1 className='text-center text-wrap text-xs'>{cast.character}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default TopCasts
