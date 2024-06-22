import React from 'react'

const GenreBox = ({genre}) => {
  return (
    <div className='inline-block text-white bg-pink-600 rounded-lg px-2 py-1 mx-2 my-1 shadow-lg hover:bg-pink-700 transition-colors duration-200 ease-in-out'>
    {genre}
  </div>
  )
}

export default GenreBox
