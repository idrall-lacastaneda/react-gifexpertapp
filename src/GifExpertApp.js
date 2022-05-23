import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {
  // const categories = ['OnePunch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['OnePunch']);

  // const handleAdd = () => {
  //     setCategories([...categories, 'Anime X']);
  //     //setCategories( cats => [...cats, 'Anime Y']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={ handleAdd }>Agregar</button> */}
      <ol>
        {
                    // categories.map( category => {
                    //     return <li key={ category } >{ category }</li>
                    // })
                    categories.map((category) => (
                      <GifGrid
                        key={category}
                        category={category}
                      />
                    ))
                }
      </ol>
    </>
  );
}
