import React from 'react'
import { useParams } from 'react-router-dom'
// import { getRecipe } from '../firebase'
import { RecipeDataContext } from '../App'

export default function Recipe() {

  const params = useParams()
  console.log("params", params)

  const recipeData = React.useContext(RecipeDataContext)
  console.log(recipeData)

  /* React.useEffect(() => {
    getRecipe(params.name)
  }, [params.name]) */

  return (
    <div className='page-container'>
      <h1>{params.name}</h1>

    </div>
  )
}