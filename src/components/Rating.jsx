import React from 'react'

const Rating = ({rating}) => {

    
            
    const percentage = rating*10

    const getRatingColor = (rating) => {
        if(rating >= 7) return 'green';
        if(rating >= 4) return '#F28C28';
  
        return 'red';
    }

  return (
    
    <div className="radial-progress xl:text-xl text-black text-xs mx-4 my-2 bg-white" style={{
      "--value": `${percentage}`,
      "color": getRatingColor(rating),
      "--thickness": "4px",
      "--size": "3rem"

    }} role="progressbar">{rating}</div>
    
  )
}

export default Rating
