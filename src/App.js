import React, { Component } from "react";
import logo from './logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Help from "./Help";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
           <div className="App">
             <nav className="navbar navbar-expand-lg fixed-top mb-4">
               <div className="container">
                  <a className="navbar-brand" href="/">
                  <img src={logo} className="App-logo" alt="logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <NavLink to="/" exact className="nav-link">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/products" className="nav-link">Products</NavLink>
                      </li>
                       <li className="nav-item">
                          <NavLink to="/help" className="nav-link">Help</NavLink>
                      </li>
                    </ul>
                    
                  </div>
                </div>
            </nav>
            <main role="main">
           
            <div className="content">
               <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/products" component={Products}/>
               <Route path="/help" component={Help}/>

            </div>

          </main>
    </div>
        </div>

      </HashRouter>
    );
  }
}


export default App;
