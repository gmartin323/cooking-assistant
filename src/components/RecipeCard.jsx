import React from "react"
import { Link } from "react-router-dom"

export default function RecipeCard( { recipe } ) {

  const { recipeUrl, name, imageurl, extra_info, preparation_time, cooking_time, serves } = recipe 

  return (
    
      <div className='recipe-card'>
        <img className='recipe-card-img' src={imageurl} alt={`Image of ${name} dish`} />
        <div className='recipe-card-info'>
          <p className='recipe-card-name'> {name}</p>
          <p className='recipe-card-extra-info'> with {extra_info}</p>
          <p className='recipe-card-preptime'>Prep: {preparation_time} mins</p>
          <p className='recipe-card-cooktime'>Cook: {cooking_time} mins</p>
          <p className='recipe-card-serves'>Serves: {serves}</p>
        </div>
    </div>
  )
}