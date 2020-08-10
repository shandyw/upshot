import React from "react";
import shoe from './img/img_04.jpg';
import watch from './img/img_06.jpg';
import bike from './img/img_13.jpg';
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  {
    id: 'product-1',
    name: 'Title with Two Very Very Long Long Lines',
    description: 'And a very long description to boot. Why bother describing something with so many words?',
    category: 'footwear',
    image: shoe,
  },
 {
    id: 'product-2',
    name: 'One Short Title',
    description: 'And a very long description to boot. Why bother describing something with so many words?',
    category: 'footwear',
     image: watch,
  },
   {
    id: 'product-3',
    name: 'One Short Title',
    description: 'With a short description.',
    category: 'footwear',
     image: shoe,
  },
   {
    id: 'product-4',
    name: 'Title with Two Very Very Long Long Lines',
    description: 'With a short description.',
    category: 'footwear',
    image: bike,
  },
 {
    id: 'product-5',
     name: 'Title with Two Very Very Long Long Lines',
    description: 'And a very long description to boot. Why bother describing something with so many words?',
    category: 'footwear',
     image: shoe,
  },
   {
    id: 'product-6',
     name: 'Title with Two Very Very Long Long Lines',
   description: 'And a very long description to boot. Why bother describing something with so many words?',
    category: 'footwear',
    image: watch,
  },
];
 
const ProductList = () => (
 
  <div className="card-deck">
 
    {list.map(item => (
  
   
      <div className="card mb-4" key={item.id} data-category={item.category}>
      
        <div className="card-body">
         <img className="card-img-top img-fluid" src={item.image} alt={item.name}/>
       
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          
         
        </div>
         <div className="card-footer"> <Button/></div>
      </div>


     ))}


  </div>

);


 
export default ProductList;