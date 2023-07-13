import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import getData from 'api';

export class App extends Component {
  state = { images: [], currentPage: 1, language: 'en' };

  handleSubmit = async searchQuery => {
    const { currentPage } = this.state;
    const data = await getData({ searchQuery, currentPage });

    this.setState({ images: data.hits });
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE');
  }

  // async componentDidMount() {}

  render() {
    const { images } = this.state;
    console.log('App state: ', this.state);

    return (
      <div className="wrapper">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <Button />
      </div>
    );
  }
}
