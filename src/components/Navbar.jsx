import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../components/ThemeContext'
const Navbar = () => {

  const { darkTheme, toggleTheme} = useContext(Context)
  const ThemeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    // padding: '2rem',
    // margin: '2rem',
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={ThemeStyles}>
        <Link className="navbar-brand" to='/'>Main</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/posts'>Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/aboutUs'>About Us</Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </nav>
  )
}

export default Navbar