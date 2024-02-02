import React from "react";
import { Link } from "react-router-dom";
import { RecipeDataContext } from '../App'
import RecipeCard from "./RecipeCard";

export default function RecipeCardContainer() {

  const recipes = React.useContext(RecipeDataContext)

  return (
    <section className='recipe-card-container'>
      {recipes.map((recipe) => {
        return (
          <Link 
            to={`/recipes/${recipe.recipeUrl}`} 
            aria-label={`View ${recipe.name} recipe`}
            className='recipe-card-link'
            key={recipe.id}
          >
            <RecipeCard 
              recipe={recipe}
            />
          </Link>
        )
      })}
    </section>
  )
} 