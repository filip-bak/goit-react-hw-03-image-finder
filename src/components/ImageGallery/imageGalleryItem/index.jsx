import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  static propTypes = { src: PropTypes.string, alt: PropTypes.string };

  render() {
    const { src } = this.props;
    // onClick
    console.log(src);
    return (
      <li className="gallery-item" style={{ width: 250 }}>
        <img src={src} alt="" style={{ objectFit: 'cover' }} />
      </li>
    );
  }
}

export default ImageGalleryItem;
