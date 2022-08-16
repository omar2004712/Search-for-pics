import React from 'react';

function ImageList(props) {
  const images = props.images.map(({ description, id, urls: { regular } }) => (
    <img key={id} src={regular} alt={description} />
  ));

  return <div>{images}</div>;
}

export default ImageList;
