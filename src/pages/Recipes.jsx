import React from 'react'
import { useRecipeDataContext } from "../context/recipeDataContext";
import RecipeCardContainer from '../components/RecipeCardContainer'

export default function Recipes() {

  const { recipes, setRecipes, loading, error } = useRecipeDataContext()

  const [filteredRecipes, setFilteredRecipes] = React.useState(recipes)
  const [searchQuery, setSearchQuery] = React.useState("")
  // const [searchParam] = React.useState(["name", "extra_info", "author"]) // PROBLEM WHEN USING INGREDIENTS/AUTHOR SEARCHPARAM
  const [searchParam] = React.useState(["name", "extra_info"])

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

  // filter categories

  

  return (
      <div className='page-container'>
        <div className="search-form-wrapper">
          <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search Recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="checkbox"
            className="filter-input"
          />
        </div>


        <RecipeCardContainer recipes={filteredRecipes}/>
      </div>
  )
}