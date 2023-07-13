import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
