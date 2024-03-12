import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function GoBackBtn( {location, text} ) {

  const navigate = useNavigate()

  // prev link that didn't navigate when user didn't previously navigate to page

  {/* <a 
      className='back-btn'
      onClick={() => navigate(-1)}
  > */} 

  return (
    
    <Link 
      to={location}
      className='back-btn'
    >
      <i 
        className="fa-solid fa-chevron-left"
        style={{
          fontSize: '0.55rem',
          paddingRight: '2px',
        }} />
      {text}
    </Link>
    
  )
}