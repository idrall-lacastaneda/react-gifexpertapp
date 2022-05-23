// import React, { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export function GifGrid({ category }) {
  const { data: images, loading } = useFecthGifs(category);

  // console.log(loading);
  // const [count, setCount] = useState(0);
  // const [images, setImages] = useState([]);
  // Con useEffect solo se ejecuta cuando el componente es renderizado por primera vez
  // (esto para evitar que se este renderizando "all" cada que hay un cambio)
  // useEffect(() => {
  // eslint-disable-next-line no-use-before-define
  // getGifs(category)
  //  .then(setImages);
  // }, [category]); // Al agregar el category aqui, es para que el useEffect se actualice cuando
  // haya un cambio en la variable

  // const getGifs = async () => {
  //   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uTAkONaDs5Z87nmqNb27vCqwaDb3v2rx`;
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();
  //
  //   const gifs = data.map((img) => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url,
  //   }));
  //
  //   console.log(gifs);
  //   setImages(gifs);
  // };

  // getGifs();

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      { loading && <p className="animate__animated animate__slideInLeft">Loading</p> }
      <div className="card-grip">

        {
                images.map((img) => (
                  <GifGridItem
                    key={img.id}
                    {...img}
                  />
                ))
            }
        {/* <ol> */}
        {/*    { */}
        {/*        images.map( img => { */}
        {/*            return <li key={img.id}>{img.title}</li> */}
        {/*        }) */}
        {/*        // images.map( {id, title} => { */}
        {/*        // return <li key={id}>{title}</li> */}
        {/*        // }) */}
        {/*    } */}
        {/* </ol> */}
        {/* <h3>{count}</h3> */}
        {/* <button onClick={ ()=> setCount (count + 1)}>+1</button> */}

      </div>
    </>
  );
}

GifGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.string.isRequired,
};
