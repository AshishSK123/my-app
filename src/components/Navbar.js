import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
      <nav style={{border:'1px solid black'}} className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <b className="navbar-brand">{props.title}</b>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" style={props.mode === 'light' ? { color: 'black' } : { color: 'white' }} htmlFor="flexSwitchCheckDefault">{props.mode}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
