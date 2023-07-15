import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = { src: PropTypes.string };

  state = {
    loaded: false,
    error: false,
  };

  handleLoad = () => {
    this.setState({ loaded: true });
  };

  handleError = () => {
    this.setState({ error: true });
  };

  render() {
    const { src } = this.props;
    const { loaded, error } = this.state;
    // onClick
    return (
      <>
        {error ? (
          <li className={styles.placeholder}></li>
        ) : (
          <li
            className={loaded ? `${styles.container}` : `${styles.placeholder}`}
          >
            <img
              className={styles.image}
              style={loaded ? {} : { visibility: 'hidden' }}
              src={src}
              alt=""
              onLoad={this.handleLoad}
              onError={this.handleError}
            />
          </li>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
