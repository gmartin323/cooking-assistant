import React from "react";

export default function RecipePageDirections( {directions} ) {


  function pad(num) {
    if (num < 10) {
      return `0${num}` 
    } else {
      return {
        num
      }
    }
  }

  console.log(pad(10))

  return (
    <section className="recipe-page-directions-container">
      <h2 className="recipe-page-directions-heading" >Directions</h2>
      <ul className="recipe-page-directions-list">
        {directions.map((direction, index) => {
          return (
            <li key={direction} className="recipe-page-direction">
              <p className="direction-number">{pad(index + 1)}</p>
              <p className="direction-text">{direction}</p>
            </li>
            )
          })}
      </ul>
    </section>
  )
}