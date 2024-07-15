/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import {Tooltip} from "@nextui-org/tooltip";



const ProductCard = () => {
  const [Pdata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col align-middle relative'>
    <div className='grid grid-rows-1 grid-flow-col gap-2 justify-between w-screen overflow-scroll h-fit p-4 scrollbar-hide '>
      {Pdata.map((item, i) => (
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
        width="160"
        image={item.images[0]}
      />
      <CardContent className=' py-1'>
      <Tooltip content={item.title} className=' text-black'>
        <h2 className='text-sm max-sm:text-[10px]
        line-clamp-1
        font-bold flex-grow '>{item.title}</h2>
        </Tooltip>
        <h3 className='flex-grow text-sm max-md:text-[9px] '>price : ${item.price}</h3>
      </CardContent >
      <CardActions className='flex max-sm: align-bottom relative py-1 bottom-0'>
        <button  className=' max-md:text-[9px] w-full max-sm:p-1 max-sm:mb-1 text-cyan-50 bg-blue-700 p-3 rounded-lg'> Add cart</button>
        <button className=' max-md:text-[9px] w-full max-sm:p-1 max-sm:mb-1 text-cyan-50 bg-orange-600 py-3 px-7  rounded-lg'> Buy</button>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default ProductCard;
