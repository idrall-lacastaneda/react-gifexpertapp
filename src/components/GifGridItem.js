import React from 'react';
import PropTypes from 'prop-types';

export function GifGridItem({ id, title, url }) {
  // console.log(id, title, url);

  return (
    <div className="card animate__animated animate__pulse">
      <img src={url} alt={title} />
      <p>
        {id}
        {title}
        {' '}
      </p>
    </div>
  );
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
