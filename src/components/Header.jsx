import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/cook" >Cook</NavLink>
        <Link className="home-btn" to="">Home</Link>
        <NavLink to="/shop" >Shop</NavLink>
      </nav>
    </header>
  )
}