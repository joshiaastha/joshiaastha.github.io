import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const onMouseClick = () => {
    const bars = document.getElementsByClassName('bar');
    const navBarLinks = document.getElementsByClassName('navbar-links')[0];
    navBarLinks.classList.toggle('active');
    bars.innerHTML = '<i className="fa fa-times" />';
}

export default class NavBar extends React.Component {
  render() {
    return (
        
            <ul className="navbar">
                <div className="Aastha">
                    <Link to="/">Aastha Joshi</Link>
                </div>
                <a className="toggle" onClick={() => onMouseClick()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                
                <div className="navbar-links">
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/Education">Education</Link></li>
                        <li><Link to="/Experience">Experience</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/ContactMe">Contact Me</Link></li>
                    </ul>
                </div>
                
            </ul>
        
    )
  }
}