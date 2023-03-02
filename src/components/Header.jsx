import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (   
    <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <NavLink to="/" className="navbar-brand"> WikiCountries
      </NavLink>

    </div>
    </nav>


 <div>

  <h1>LAB - WikiCountries </h1>
</div> 
</div>
  )
}

export default Header;

