import React, { Component } from 'react';
import '../App.css';
import {ReactComponent as AboutImg} from '../images/about.svg'
//import NavBar from './NavBar';
//import pic from "../images/ADOBE_Cropped.png";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class About extends Component {
  render() {
    return (
      <div className="main">
        
        <header>
          <div className="hello text-center">
            <svg width="100%" height="100%">
              <text x="50%" y="60%" text-anchor="middle">
                HELLO!
              </text>
            </svg>
          </div>
          <div className="name text-center">
            I'm Aastha Joshi.
          </div>
          <div className="basic" style={{display: "flex"}}> 
          
          <div><AboutImg style={{float: "left"}} height="550" /></div>
          <div className="about text-center">
             I'm an undergraduate pursuing B.E. in Electronics and Telecommunications from K.J. Somaiya College of Engineering, Vidyavihar. I'm passionate about Machine Learning, Computer Vision and have strong Problem Solving skills. I'm always up for new challenges and opportunities to explore new technologies and domain. Besides technology, I love networking with people from different backgrounds and reading novels, preferably Spiritual, Suspense and Thrillers.
            
          </div>
          </div> 
        </header>
        
      </div>
      
    )
  }
}