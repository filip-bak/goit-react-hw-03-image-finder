import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.searchQuery);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="searchQuery"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            // placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
