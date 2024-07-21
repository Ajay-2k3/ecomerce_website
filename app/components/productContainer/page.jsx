// app/components/ProductCard.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';

const ProductCard = () => {
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
    <div className='flex flex-col align-middle relative'>
      <div className='grid gap-6 grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 justify-between self-center w-fit h-fit p-4'>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ item }) => {


  return (
    <Grid item className=''>
      <Card className='box-s justify-between max-w-56 min-w-28 flex flex-col h-fit border-medium hover:border-black text-slate-950 shadow-slate-500 bg-slate-200 shadow-lg relative'>
        <CardMedia 
          component="img"
          height="144"
          width="200"
          image={item.masterVariant.images[0].url}
          alt={item.name['de-DE']}
        />
        <CardContent className='py-1'>
          <h2 className='text-sm max-sm:text-[10px] line-clamp-1 font-bold flex-grow'>{item.name['de-DE']}</h2>
          <span className='text-sm max-sm:text-[8px] line-clamp-1 font-bold flex-grow'>
            Price: ${item.masterVariant.prices[0].value.centAmount / 100}
          </span>
        </CardContent>
        <CardActions className='flex w-full align-bottom relative py-1 bottom-0'>
          <button  className='transition-colors duration-300 ease-in-out  hover:bg-blue-600 button-class flex max-sm:text-xs max-md:text-sm max-lg:text-medium text-center bg-blue-500 text-white rounded-md p-1 self-center'>
            Add to Cart
          </button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;