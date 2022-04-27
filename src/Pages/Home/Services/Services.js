import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ServiceContent from './ServiceContent';

const Services = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('/products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div>
      <h1>Total Products is {products.length}</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ServiceContent product={product}></ServiceContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services