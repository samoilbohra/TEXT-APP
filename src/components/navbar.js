import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar(props) {
  return (
    <div >
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"   >Text utils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"   >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"   >About</Link>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
            <div class="form-check form-switch mx-2">
              <input class="form-check-input" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }} type="checkbox" s role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
              <label class="form-check-label" for="flexSwitchCheckDefault" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >Dark Mode</label>
            </div>

            {/* <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={event => props.toggle(event, '')} value="option1" />
              <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" onClick={event => props.toggle(event, 'blue')} id="inlineRadio2" value="option2" />
              <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" onClick={event => props.toggle(event, 'green')} id="inlineRadio3" value="option3" />
              <label class="form-check-label" for="inlineRadio3">3 </label>
            </div> */}
          </div>
        </div>
      </nav>


    </div>
  )
}
