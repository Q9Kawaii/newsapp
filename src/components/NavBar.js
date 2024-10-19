import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {  Link  } from "react-router-dom";

export class NavBar extends Component {
  render() {
    let { mode, toggleMode } = this.props; // Destructure mode and toggleMode from props
    return (
      <div>
        {/* Dynamically set the navbar background and text color based on mode */}
        <nav className={`navbar navbar-expand-lg  navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
                        <Link className="navbar-brand" to="/">LoremNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>                   
                        </ul>
                        </div>
                    </div>
          <form className="d-flex" role="search">
            <div className={`mx-3 flex justify-content-between form-check form-switch text-${mode === 'dark' ? 'light' : 'black'}`}>
              {/* Use toggleMode from props */}
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="text-nowrap form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
