import React from "react"

export default function RecipeCard( props ) {

  let recipe = {props}
  console.log(props.recipe)

  return (
    <div className='recipe-card'>
      <img className='recipe-card-img' src={props.recipe.imageurl}/>
      <div className='recipe-card-info'>
        <p className='recipe-card-name'> {props.recipe.name}</p>
        <p className='recipe-card-extra-info'> with {props.recipe.extra_info}</p>
        <p className='recipe-card-preptime'>Prep: {props.recipe.preparation_time} mins</p>
        <p className='recipe-card-cooktime'>Cook: {props.recipe.cooking_time} mins</p>
        <p className='recipe-card-serves'>Serves: {props.recipe.serves}</p>
      </div>
    </div>
  )
}