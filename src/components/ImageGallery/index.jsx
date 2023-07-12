import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from './imageGalleryItem';

export class ImageGallery extends Component {
  static propTypes = { images: PropTypes.arrayOf(PropTypes.object) };

  render() {
    // map items from api
    const { images } = this.props;
    return (
      <ul className="gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map(({ id, webformatURL }) => {
          return <ImageGalleryItem key={id} src={webformatURL} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;
