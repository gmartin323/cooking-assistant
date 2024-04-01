import React from 'react'
import Select from 'react-select';
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
    // total time
    //    -> 30mins or less
    
    // ratio of owned ingredients 
    //    -> all ingredients
    //    -> missing one or two
    //    -> many missing 



  return (
      <div className='page-container'>
        <div className="search-form-wrapper">
          <div className='filter-input-wrapper'>
            <Select 
              options={recipes}
              className="filter-input"
            ></Select>
          </div>
          <div className='search-input-wrapper'>
            <span className='search-input-icon'>
            <i className="fas fa-search fa-xs" style={{color: "rgba(77, 77, 77, 0.25)"}}></i>
            </span>
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search Recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* <input
            type="search" 
            className="filter-input"
            placeholder="Filter Recipes"
          /> */}
        </div>


        <RecipeCardContainer recipes={filteredRecipes}/>
      </div>
  )
}