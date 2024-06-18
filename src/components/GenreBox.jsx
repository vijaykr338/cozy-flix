import React from 'react'

const GenreBox = ({genre}) => {
  return (
    <div className='text-white bg-pink-600 rounded-lg px-2 py-1 m-2 shadow-lg hover:bg-pink-700 transition-colors duration-200 ease-in-out'>
    {genre}
  </div>
  )
}

export default GenreBox
