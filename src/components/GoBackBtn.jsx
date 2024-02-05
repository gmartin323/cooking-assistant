import React from 'react'


import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function GoBackBtn( {text} ) {

  const navigate = useNavigate()

  return (
    <a 
      className='back-btn'
      onClick={() => navigate(-1)}
    >
      <i 
        className="fa-solid fa-chevron-left"
        style={{
          fontSize: '0.55rem',
          paddingRight: '2px'
        }} />
      {text}
    </a>
  )
}