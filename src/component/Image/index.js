import React from 'react';
import ErrorImage from '-/assets/DefaultImage/DfImage.png';

function Image({ src }) {
  return <img src={src || ErrorImage} alt={src || 'none'} />;
}

export default Image;
