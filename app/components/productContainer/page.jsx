/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import all_product from '@/public/Assets/all_product';
import Clip from '@mui/material'

const item = all_product;

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
      <div className='flex w-full h-5'>
      <Divider sx={{height:2}} textAlign="left" className='bg-gray-800 w-full'>
        <Typography className=' bg-white text-stone-950 text-center relative bottom-5 p-2'>
           Latest
        </Typography>
        </Divider>
    </div>
    <div className='grid grid-rows-1 grid-flow-col gap-2 justify-between w-full overflow-scroll h-fit p-4 scrollbar-hide '>


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
    <Card  sx={{ minWidth: 160 }} className=' justify-between flex flex-col w-56 h-96 border-medium text-slate-950 shadow-slate-500 bg-slate-300 shadow-lg relative'>
      <CardMedia 
        component="img"
        height="144"
        width="160"
        image={item.images[0]}
      />
      <CardContent>
        <h2 className='text-sm font-bold '>{item.title}</h2>
        <h3>price : ${item.price}</h3>
      </CardContent>
      <CardActions className=' align-bottom relative bottom-0'>
        <button className=' text-cyan-50 bg-blue-700 p-3 rounded-lg'> Add cart</button>
        <button className=' text-cyan-50 bg-orange-600 py-3 px-7  rounded-lg'> Buy</button>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default ProductCard;
