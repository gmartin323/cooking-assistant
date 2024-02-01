import React from 'react'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../firebase'

export default function Recipe() {

  const params = useParams()
  console.log(params)

  React.useEffect(() => {
    getRecipe(params.name)
  }, [params.name])

  return (
    <div className='page-container'>
      <h1>{params.name}</h1>

    </div>
  )
}