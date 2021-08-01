import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories((categories) => [inputValue,...categories ]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full">
      <input
        type="text"
        aria-label="Buscar gif"
        placeholder="Search all the GIFs"
        className="border 
        w-full  ring outline-none  ring-gray-300 focus:ring focus:ring-purple-500 p-2 mt-5 mb-2"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
