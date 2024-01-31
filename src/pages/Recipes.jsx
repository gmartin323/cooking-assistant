import React from 'react'
import { getRecipes } from '../firebase'

export default function Recipes() {

  const [recipesArray, setRecipesArray] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadRecipes() {
      setLoading(true)
      try {
        const data = await getRecipes()
        setRecipesArray(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    setRecipesArray(getRecipes)

    loadRecipes()
  }, [])

  console.log(recipesArray)

  return (
    <div className='page-container'>
      <h1>Recipes</h1>
      <section className='card-container'>
        {recipesArray[0] && 
          <div className='recipe-card'>
            <img className='recipe-card-img' src={recipesArray[0].imageurl}/>
            <p>{recipesArray[0].name}</p>
          </div>
        }
      </section>
    </div>
  )
}