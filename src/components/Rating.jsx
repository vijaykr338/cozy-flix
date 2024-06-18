import React from 'react'

const Rating = ({rating}) => {

    
            
    const percentage = rating*10

    const getRatingColor = (rating) => {
        if(rating >= 7) return 'green';
        if(rating >= 4) return '#F28C28';
  
        return 'red';
    }

  return (
    
      
      <div className="radial-progress text-2xl text-white  w-15 h-15 bg-opacity-10 bg-white" style={{
                  "--value":`${percentage}`,
                  "color": getRatingColor(rating)
                
                  }} role="progressbar">{rating}</div>
    
  )
}

export default Rating
