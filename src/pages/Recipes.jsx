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
      <h1 className="page-heading">Recipes</h1>
        {recipesArray[0] && 
          <section className='recipe-card-container'>
            <div className='recipe-card'>
              <img className='recipe-card-img' src={recipesArray[0].imageurl}/>
              <div className='recipe-card-info'>
                <p className='recipe-card-name'> {recipesArray[0].name}</p>
                <p className='recipe-card-extra-info'> with {recipesArray[0].extra_info}</p>
                <p className='recipe-card-preptime'>Prep: {recipesArray[0].preparation_time} mins</p>
                <p className='recipe-card-cooktime'>Cook: {recipesArray[0].cooking_time} mins</p>
                <p className='recipe-card-serves'>Serves: {recipesArray[0].serves}</p>
              </div>
            </div>
            <div className='recipe-card'>
              <img className='recipe-card-img' src={recipesArray[0].imageurl}/>
              <div className='recipe-card-info'>
                <p className='recipe-card-name'> {recipesArray[0].name}</p>
                <p className='recipe-card-preptime'>Prep: {recipesArray[0].preparation_time}</p>
                <p className='recipe-card-cooktime'>Cook: {recipesArray[0].cooking_time}</p>
                <p className='recipe-card-serves'>Serves: {recipesArray[0].serves}</p>
              </div>
            </div>
        </section>
      }
    </div>
  )
}