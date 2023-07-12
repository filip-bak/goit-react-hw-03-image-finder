import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Modal extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
