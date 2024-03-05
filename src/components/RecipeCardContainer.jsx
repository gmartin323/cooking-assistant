import React from "react";
import { Link } from "react-router-dom";
import { useRecipeDataContext } from "../context/recipeDataContext";

import RecipeCard from "./RecipeCard";

export default function RecipeCardContainer() {

  const { recipes, setRecipes, loading, error } = useRecipeDataContext()

  return (
    <section className='recipe-card-container'>
      {recipes.map((recipe) => {
        return (
          <Link 
            to={`/recipes/${recipe.recipeUrl}/${recipe.id}`}
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