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
    <form onSubmit={handleSubmit} className="w-96">
      <input
        type="text"
        aria-label="Buscar gif"
        className="border w-full my-1  ring outline-none  ring-gray-300 focus:ring focus:ring-purple-500 p-2"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
