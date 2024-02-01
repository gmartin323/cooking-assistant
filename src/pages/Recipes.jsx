import React from 'react'
import { getRecipes } from '../firebase'
import sortByName from '../utilities/sortByName'

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
        setRecipes(sortByName(data))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

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
        <RecipeCardContainer recipes={recipes} />
    </div>
  )
}