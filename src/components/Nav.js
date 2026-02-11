import React from 'react'
import { Link } from 'react-router-dom'
 


function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link" >Add</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
