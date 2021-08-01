import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";


const GifGrid = ({ category }) => {

  const { data:images, loading} = useFetchGifs(category);
 

  return (
    <>
      <h3 className="font-medium text-3xl animate__animated  animate__fadeInUp animate__faster mt-10">{category}</h3> 
      {
        loading && <p className="animate__animated animate__flash">Loading...</p> 
      }
      <div className="flex flex-wrap gap-2 my-5">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};


export default GifGrid;
