import React from 'react'
import dummy from '../assets/dummy.jpg'
import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";

const Card = ({ id }) => {


    const [creditData, setCreditData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc1NmNlMTcwOWJlZjg3NDkyMjMyMzRkODJlYmQ0MiIsInN1YiI6IjY2NmVjYzAzYjE4NWYyMTFjYjgzMGI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Ug-x32K-ZjApV6oyaFisuCJPXqInnEVgDpHUbh1dc'
        }
    };


    const fetchCredits = async () => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
        const data = await response.json();
        console.log(data)
        setCreditData(data.crew.filter((movie)=>(movie.job === "Director")));
        console.log(creditData)
        } catch(err){
            console.log(err, "Some Error Occured")
        }
        
    }

    useEffect(() => {
        fetchCredits()
    }, [])


    return (
        <div className='border-2 mx-52 rounded-2xl my-8'>
            {creditData.map((credit) => {

                return (
                <li key={credit.id} className='list-none'>
            <div className='flex'>
                <img src={dummy} alt="dummmy" className='w-36 mx-8 my-8' />

                <div className='my-16'>
                    <h1 className='text-xl  font-bold'>1. Afflicted</h1>
                    <div className='flex space-x-3 my-4'>
                        <h1>2013</h1>
                        <h1>1h 23m</h1>
                        <h1>R</h1>
                    </div>
                    <div className='flex'>
                        < FaStar className='text-yellow-300' />
                        <p className=''>6.44</p>
                    </div>
                </div>
            </div>

            <p className='my-6 mx-8 text-2xl'>Two best friends see their trip of a lifetime take a dark
                turn when one of them is struck by a mysterious affliction.
                Now, in a foreign land, they race to uncover the
                source before it consumes him completely.</p>

            <div className='flex mx-8 space-x-2 my-4'>
                <h1 className='font-bold'>Director</h1>
                <h2>{credit.name}</h2>
            </div>
            </li>
            )
            })}
            

        </div>
    )
}

export default Card
