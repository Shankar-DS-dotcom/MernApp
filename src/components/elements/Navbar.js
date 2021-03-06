import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
            <NavLink className="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link js-scroll-trigger" >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/services" className="nav-link js-scroll-trigger" >Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
  )
}
export default Navbar

  