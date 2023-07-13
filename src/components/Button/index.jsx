// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Button.module.css';

export class Button extends Component {
  // static propTypes = {};

  render() {
    return <button className={styles.btn}>Load more</button>;
  }
}

export default Button;
