import React from 'react'
import { useParams } from 'react-router-dom'
import { RecipeDataContext } from '../App'

import RecipeCard from '../components/RecipeCard'
import IngredientsList from '../components/IngredientsList'

export default function Recipe() {

  const params = useParams()

  const recipeData = React.useContext(RecipeDataContext)

  const currentRecipe = recipeData.filter((recipe) => recipe.recipeUrl === params.name)[0]

  return (
    <div className='page-container'>
      <RecipeCard recipe={currentRecipe} />
      <IngredientsList ingredients={currentRecipe.ingredients} />
    </div>
  )
}