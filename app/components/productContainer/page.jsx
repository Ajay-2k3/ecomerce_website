/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import {Tooltip} from "@nextui-org/tooltip";



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
    <div className='grid gap-2 grid-rows-3 grid-cols-6  justify-between self-center w-fit 0 h-fit p-4 '>
      {products.map((item, i) => (
        <ProductItem key={i} item={item} />
      ))} 
    </div> 
</div>
  );
};

const ProductItem = ({ item }) => {
  return (
    <Grid item className=''>
    <Card  className=' justify-between flex flex-col max-md:w-28 w-56 max-md:h-56 h-96 border-medium text-slate-950 shadow-slate-500 bg-slate-300 shadow-lg relative'>
      <CardMedia 
        component="img"
        height="144"
        width="200"
        image={item.masterVariant.images[0].url}
      />
      <CardContent className=' py-1'>
      <Tooltip content={item.name['en-US']} className=' text-black'>
        <h2 className='text-sm max-sm:text-[10px]
        line-clamp-1
        font-bold flex-grow '>{item.name['de-DE']}</h2>
        </Tooltip>
      </CardContent >
      <CardActions className='flex max-sm: align-bottom relative py-1 bottom-0'>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default ProductCard;
