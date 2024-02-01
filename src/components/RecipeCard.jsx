import React from "react"
import { Link } from "react-router-dom"

export default function RecipeCard( { recipe } ) {

  // let ... = { recipe } -> destructure further
  
  

  return (
    <div className='recipe-card'>
      <Link 
        to={`/recipes/${recipe.recipeUrl}`} 
        aria-label={`View ${recipe.name} recipe`}
        className='recipe-card-link'
      >
        <img className='recipe-card-img' src={recipe.imageurl} alt={`Image of ${recipe.name} dish`} />
        <div className='recipe-card-info'>
          <p className='recipe-card-name'> {recipe.name}</p>
          <p className='recipe-card-extra-info'> with {recipe.extra_info}</p>
          <p className='recipe-card-preptime'>Prep: {recipe.preparation_time} mins</p>
          <p className='recipe-card-cooktime'>Cook: {recipe.cooking_time} mins</p>
          <p className='recipe-card-serves'>Serves: {recipe.serves}</p>
        </div>
      </Link>
    </div>
  )
}