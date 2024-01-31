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
        setRecipes(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    setRecipes(getRecipes)

    loadRecipes()

    
  }, [])


  return (
    <div className='page-container'>
      <h1 className="page-heading">Recipes</h1>
        {recipes[0] &&  
          <RecipeCardContainer recipes={recipes} />    
      }
    </div>
  )
}