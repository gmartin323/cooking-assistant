import React from 'react'
import { useRecipeDataContext } from "../context/recipeDataContext";
import RecipeCardContainer from '../components/RecipeCardContainer'

export default function Recipes() {

  const { recipes, setRecipes, loading, error } = useRecipeDataContext()

  const [filteredRecipes, setFilteredRecipes] = React.useState(recipes)
  const [searchQuery, setSearchQuery] = React.useState("")
  // const [searchParam] = React.useState(["name", "extra_info", "author"]) // PROBLEM WHEN USING INGREDIENTS/AUTHOR SEARCHPARAM
  const [searchParam] = React.useState(["name", "extra_info"])

  // const filteredRecipes = recipes.filter(recipe => {
  //   recipe.ingredients.includes()
  // })

  function search(items, setItems) {
    setItems(
      items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase()) > -1
            )
        })
      })
    ) 
  }

  React.useEffect(() => {
    setFilteredRecipes(recipes)
  }, [recipes])

  React.useEffect(() => {
    search(recipes, setFilteredRecipes)
  }, [searchQuery])

  console.log(searchQuery)
  console.log('filtered', filteredRecipes)
  console.log('recipes', recipes)

  return (
      <div className='page-container'>
        {/* <h1 className="page-heading">Recipes</h1> */}


        <div className="search-wrapper" style={{padding: "2rem"}}>
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <span className="sr-only">Search countries here</span> */}
          </label>
        </div>


        <RecipeCardContainer recipes={filteredRecipes}/>
      </div>
  )
}