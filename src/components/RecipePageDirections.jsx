import React from "react";

export default function RecipePageDirections( {directions} ) {

  return (
    <section className="recipe-page-directions-container">
      <h2>Directions</h2>
      <ul>
        {directions.map((direction) => {
          return (
            <li key={direction}>{direction}</li>
            )
          })}
      </ul>
    </section>
  )
}