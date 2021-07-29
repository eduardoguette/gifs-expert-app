import { useState } from "react";
import AddCategory from "./components/AddCategory.js";
import GifGrid from "./components/GifGrid.js";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div className="w-full">
      <h1 className="title font-bold text-5xl font-sans leading-relaxed">
        GifExpert<span>App</span>
      </h1>
      <hr className="my-2  border-black" />
      <AddCategory setCategories={setCategories} />
       
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))} 
    </div>
  );
}

export default GifExpertApp;
