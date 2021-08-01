import {  useState } from "react";
import AddCategory from "./components/AddCategory.js";
import GifGrid from "./components/GifGrid.js";

function GifExpertApp() {
  const [categories, setCategories] = useState(["Friends"]);
 

  return (
    <div className="w-full">
      <h1 className="title font-bold text-2xl md:text-3xl font-sans leading-relaxed ">
        GifExpert<span>App</span>
      </h1> 
      <AddCategory setCategories={setCategories} />
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))} 
    </div>
  );
}

export default GifExpertApp;
