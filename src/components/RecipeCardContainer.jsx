import React from "react";
import { Link } from "react-router-dom";

import RecipeCard from "./RecipeCard";

export default function RecipeCardContainer({recipes}) {

  return (
    <>
      {recipes.length === 0 
        ? 
        <section className='recipe-card-container'>
          <p>No recipes found with that search term</p>
        </section>
        :
        <section className='recipe-card-container'>
          {recipes.map((recipe) => {
            return (
              <Link 
                to={`/recipes/${recipe.recipeUrl}/${recipe.id}`}
                aria-label={`View ${recipe.name} recipe`}
                className='recipe-card-link'
                key={recipe.id}
              >
              <RecipeCard recipe={recipe}/>
              </Link>
            )
          })}
        </section>
      }
    </>
  )
} 