import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import './App.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">   
    <meta name="Aastha's Portfolio" content="Portfolio content"/>
    <Router>
      <NavBar></NavBar>  

      <Switch>
        <Route path="/" exact>
          <About/>
        </Route>
        <Route path="/Education" exact>
          <Education/>
        </Route>
        <Route path="/Experience" exact>
          <Experience/>
        </Route>
        <Route path="/Projects" exact>
          <Projects/>
        </Route>
        <Route path="/ContactMe" exact>
          <ContactMe/>
        </Route>
      </Switch>
    
    {/* <Route path={"/"} component={App}>
      <Route component={About} />
      <Route path={"Education"} component={Education} />
      <Route path={"About"} component={About} />
    </Route> */}
    </Router>

      {/* <header className="App-header">          
        <About></About>
      </header> */}
    </div>
  );
  }
}


