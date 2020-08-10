 import React, { Component } from "react";

 
 	function prodPage() {
  alert('You clicked me!');
}


class Button extends Component {




  render() {
    return (
      <div>
       <button className="btn btn-pink" onClick={prodPage} variant="primary" size="lg">BUY NOW</button>
      </div>
    );
  }
}
 
export default Button;


