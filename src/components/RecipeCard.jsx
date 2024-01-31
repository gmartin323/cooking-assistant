import React from "react"

export default function RecipeCard( { recipe } ) {

  // let ... = { recipe } -> destructure further

  return (
    <div className='recipe-card'>
      <img className='recipe-card-img' src={recipe.imageurl}/>
      <div className='recipe-card-info'>
        <p className='recipe-card-name'> {recipe.name}</p>
        <p className='recipe-card-extra-info'> with {recipe.extra_info}</p>
        <p className='recipe-card-preptime'>Prep: {recipe.preparation_time} mins</p>
        <p className='recipe-card-cooktime'>Cook: {recipe.cooking_time} mins</p>
        <p className='recipe-card-serves'>Serves: {recipe.serves}</p>
      </div>
    </div>
  )
}