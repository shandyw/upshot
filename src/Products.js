import React, { Component } from "react";
import ProductList from "./ProductList";


class Products extends Component {
    render() {
        return (
            <div>
        <div className="jumbotron">
           <div className="container">
                <h1 className="display-3">This is a Headline</h1>
            </div>
        </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                <ul className="nav flex-column filter">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Footwear</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Water Fountains</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Garage Door Openers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Smart Home Tech</a>
                  </li>
                     <li className="nav-item">
                    <a className="nav-link" href="/">Beverages</a>
                  </li>
                     <li className="nav-item">
                    <a className="nav-link" href="/">Education</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-9">
   
           <ProductList/>
          
            </div>
          </div>
        </div>
      </section> 
            </div>
        );
    }
}

export default Products;