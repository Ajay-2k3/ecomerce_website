'use client'
import React, { useEffect, useState } from 'react';

const searchBar = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('/api/product');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name['en-US']}</li>
          ))}
        </ul>
      </div>
    );
};

export default searchBar;
