import React from 'react'
import { useParams } from 'react-router-dom'
import { RecipeDataContext } from '../App'

import RecipeCard from '../components/RecipeCard'
import IngredientsList from '../components/IngredientsList'

export default function Recipe() {

  const params = useParams()
  console.log("params", params)

  const recipeData = React.useContext(RecipeDataContext)

  const currentRecipe = recipeData.filter((recipe) => recipe.recipeUrl === params.name)[0]

  console.log(currentRecipe)

  return (
    <div className='page-container'>
      <h1>{params.name}</h1>
      <RecipeCard recipe={currentRecipe} />
      <IngredientsList ingredients={currentRecipe.ingredients} />
    </div>
  )
}