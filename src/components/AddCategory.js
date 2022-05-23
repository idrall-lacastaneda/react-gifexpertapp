import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function AddCategory({ setCategories }) {
  // const [inputValue, setInputValue] = useState(); Al dejarlo sin argumento el useState se pone en
  // undefined el inputValue,entonces generara warnings de actualizacion descontrolada
  const [inputValue, setInputValue] = useState('');

  // Funcion para "cachar" lo que se escribe en el input text
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]); // Siempre manejar el useState
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
