import React, { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import getData, { getTotalPages } from 'api';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: null,
    totalPages: 0,
    language: 'en',
  };

  handleSubmit = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  ifShowButton = () => {
    const { images, searchQuery, currentPage, totalPages } = this.state;

    const noMoreImages = totalPages === currentPage;

    if (images.length < 12 || noMoreImages) {
      return false;
    } else if (searchQuery !== null) {
      return true;
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { searchQuery, currentPage, totalPages } = this.state;

      if (
        prevState.searchQuery !== searchQuery ||
        prevState.currentPage !== currentPage
      ) {
        const data = await getData({
          searchQuery,
          currentPage,
        });

        // On searchQuery change get new state
        if (prevState.searchQuery !== searchQuery) {
          this.setState({
            images: data.hits,
            totalPages: getTotalPages(data.totalHits, 12),
          });
          return;
        }

        if (totalPages < currentPage) {
          this.setState({ currentPage: totalPages + 1 });
          return;
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
        console.log('UPDATE');
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { images } = this.state;
    console.log('App state: ', this.state);

    return (
      <div className="wrapper">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={images}
          onLoadMore={this.handleLoadMore}
          sceleton={this.handleSceleton}
        />
        {this.ifShowButton() ? (
          <Button onLoadMore={this.handleLoadMore} />
        ) : null}
      </div>
    );
  }
}
