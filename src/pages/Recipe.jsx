import React from 'react'
import { useParams } from 'react-router-dom'
import { RecipeDataContext } from '../App'

import RecipeCard from '../components/RecipeCard'
import IngredientsList from '../components/IngredientsList'
import RecipePageDirections from '../components/RecipePageDirections'
import GoBackBtn from '../components/GoBackBtn'

export default function Recipe() {

  const params = useParams()

  const recipeData = React.useContext(RecipeDataContext)

  const currentRecipe = recipeData.filter((recipe) => recipe.recipeUrl === params.name)[0]

  return (
    <div className='page-container recipe-page'>
      <GoBackBtn text={"All Recipes"} />
      <RecipeCard recipe={currentRecipe} />
      <IngredientsList ingredients={currentRecipe.ingredients} />
      <RecipePageDirections directions={currentRecipe.steps} />
    </div>
  )
}