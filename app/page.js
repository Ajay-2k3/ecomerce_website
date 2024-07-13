/* eslint-disable react/react-in-jsx-scope */
"use client"

import BannerSlider from "./components/bannerSlider/page";
import ProductCard from "./components/productContainer/page";

export default function Home() {

  return (
    
    <div className="h-full m-0 flex flex-col bg-white relative ">
      {/* BannerSlider at the top */}
      <div className="order-1">
        <BannerSlider />
     
      </div>
      <section className="order-2 flex-grow mt-4 p-4 pb-7">
        <ProductCard />  
      </section>
    </div>
  );
}
