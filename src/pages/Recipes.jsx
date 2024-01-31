import React from 'react'
import { getRecipes } from '../firebase'

import RecipeCardContainer from '../components/RecipeCardContainer'

export default function Recipes() {

  const [recipes, setRecipes] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadRecipes() {
      setLoading(true)
      try {
        const data = await getRecipes()

        const sortedRecipes = data.sort(function(a, b) {

          const recipeA = a.name.toLowerCase()
          const recipeB = b.name.toLowerCase()

          if (recipeA < recipeB) {
            return -1
          } else if (recipeB > recipeB) {
            return 1
          } else {
            return 0
          }
        })

        setRecipes(sortedRecipes)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    
    // setRecipes(getRecipes)

    loadRecipes()

    
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  } 

  return (
    <div className='page-container'>
      <h1 className="page-heading">Recipes</h1>
        {recipes[0] &&  
          <RecipeCardContainer recipes={recipes} />    
      }
    </div>
  )
}