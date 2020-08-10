import React, { Component } from "react";
import cheese from './img/Trappista_cheese_original.jpg';
 
class About extends Component {
  render() {
    return (
      <div>
         <div className="jumbotron">
              <div className="container">
                <h1 className="display-3">About</h1>
              </div>
         </div>
         <section>
           
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>All About Me</h2>
                  </div>
               </div>



              <div className="row">
                <div className="col-md-8">
               
                   <p>Cheesy grin cheese and biscuits rubber cheese. Hard cheese goat the big cheese monterey jack gouda stilton stinking bishop cheese and biscuits. Everyone loves halloumi pecorino cheese slices melted cheese edam squirty cheese dolcelatte. Cut the cheese stilton bocconcini stilton swiss cream cheese feta rubber cheese. Paneer cauliflower cheese.</p>

<p>Cut the cheese parmesan roquefort. Paneer cream cheese hard cheese blue castello bavarian bergkase parmesan danish fontina pepper jack. Fondue brie swiss danish fontina chalk and cheese everyone loves danish fontina cauliflower cheese. Paneer fondue st. agur blue cheese.</p>

<p>Croque monsieur roquefort stinking bishop. Cheese and biscuits queso roquefort swiss feta taleggio squirty cheese macaroni cheese. Red leicester blue castello squirty cheese chalk and cheese boursin macaroni cheese pepper jack cottage cheese. Cheese on toast pecorino bavarian bergkase melted cheese cottage cheese boursin cottage cheese bavarian bergkase. Rubber cheese.</p>
                </div>
                <div className="col-md-4">
                <figure className="figure">
               
                  <img src={cheese} alt="CHEESE!" className="figure-img img-fluid rounded"/>
                  <figcaption className="figure-caption">A cheesy caption.</figcaption>
                </figure>
              </div>
             </div>
            </div>

         </section>
      </div>

    );
  }
}
 
export default About;