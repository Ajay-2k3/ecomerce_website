// src/client/components/BannerSlider.js
"use client"

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@mui/material';

const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image:"/banner_women.png"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: "/banner_mens.png"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image: "/banner_kids.png"
    }
];

const BannerSlider = () => {
    return (
        <Carousel
            indicators={true}
            navButtonsAlwaysVisible={false}
            swipe={true}
            animation="slide"
            autoPlay={true}
            interval={3000}

            className='mt-6 '
        >
            {items.map((item, i) => (
                <BannerItem key={i} item={item} />
            ))}
        </Carousel>
    );
};

const BannerItem = ({ item }) => {
    return (
        <Paper style={{ position: 'relative' }} className='bg-teal-200'>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
            </div>
        </Paper>
    );
};

export default BannerSlider;
