import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeDataContext } from '../context/recipeDataContext'

import RecipeCard from '../components/RecipeCard'
import IngredientsList from '../components/IngredientsList'
import RecipePageDirections from '../components/RecipePageDirections'
import GoBackBtn from '../components/GoBackBtn'
import LoadingSpinner from '../components/LoadingSpinner'
import { getRecipe } from '../firebase'


// Recipes are only loaded by context.jsx when the app loads so when the user clicks refresh, the recipes are not loaded

// recipes are loaded on recipeCardContainer page when user refreshes


export default function Recipe() {
  const [currentRecipe, setCurrentRecipe] = React.useState(null)
  const {id, name} = useParams()


  const { recipes, setRecipes, loading, error } = useRecipeDataContext()

  const timeElapsed = Date.now()
  const myDate = new Date(timeElapsed)
  const today = myDate.getDate() + ' ' + myDate.toLocaleString('en-GB', { month: "short" }) + ' ' + myDate.getFullYear()
  
  
  // console.log("loading", loading)
  // console.log("recipes", recipes)
  // console.log("paramsID" , id)
  // console.log("paramsName" , name)
  // console.log("currentRecipe" , currentRecipe)
  
  /* if(!recipes) {
    currentRecipe = getRecipe(id)
  } */
  
  React.useEffect(() => {

    /* async function loadRecipe() {
      // setLoading(true)
      try {
        const localData = JSON.parse(localStorage.getItem('items'))
        if(localData) {
          setCurrentRecipe(localData)
        } else {
          const data = await getRecipe(id)
          
          setCurrentRecipe(data)
          localStorage.setItem('recipes', JSON.stringify(currentRecipe))
        }
      } catch (err) {
        // setError(err)
      } finally {
        // setLoading(false)
      }
    } */

    setCurrentRecipe(recipes.filter((recipe) => recipe.recipeUrl === name)[0])

    /* async function loadRecipe() {
      const data = await getRecipe(id)
      setCurrentRecipe(data)
    }

    if (recipes) {
      setCurrentRecipe(recipes.filter((recipe) => recipe.recipeUrl === name)[0])
      console.log("loaded with context")
    } else {
      loadRecipe()
      console.log("loaded with loadRecipe")
    } */

  }, [recipes])

  return (
    currentRecipe ? 
    <div className='page-container recipe-page'>
      <GoBackBtn location={"/recipes"} text={"All Recipes"} />
      <section className='recipe-card-section'>
        <RecipeCard recipe={currentRecipe} />
        <div className='recipe-info'>
          {currentRecipe.added ? 
          <p className='recipe-added-on'>
            Added {currentRecipe.added.substring(4, 15)}
          </p> 
          : <p></p>}
          {currentRecipe.author ? 
          <p className='recipe-author'>
            Recipe by: <a href={currentRecipe.link} target="_blank"> {currentRecipe.author}</a>
          </p> 
          :<p></p>
          }
        </div>
      </section>
      
      <IngredientsList ingredients={currentRecipe.ingredients} />
      <RecipePageDirections directions={currentRecipe.steps} />
    </div>
    : 
    <LoadingSpinner />
  )
  

}