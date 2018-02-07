import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import Loader from '../Loader';
import TunesService from '../../services/TunesService';
import LocalStorageService from '../../services/LocalStorageService';

class Page extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      favourites: LocalStorageService.getFavourites(),
      query: '',
      loading: false
    };

    this.tunesService = new TunesService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addSongToFavourites = this.addSongToFavourites.bind(this);
    this.clearFavourites = this.clearFavourites.bind(this);
  }

  // was only needed for Homework 3.9
  // componentDidMount() {
  //   this.tunesService.getSongs(this.state.query).then((data) => {
  //     console.log(`didMount: ${data}`);
  //   });
  // }

  componentDidUpdate() {
    LocalStorageService.setFavourites(this.state.favourites);
  }

  handleButtonClick() {
    this.setState({ loading: true });
    // setTimeout to verify if the loader works :)
    setTimeout(() => {
      this.tunesService.getSongs(this.state.query).then((data) => {
        this.setState({ songs: data, loading: false });
      });
    }, 2000);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  addSongToFavourites(song) {
    const fav = this.state.favourites;
    if (!fav.find(f => f.trackId === song.trackId)) {
      fav.push(song);
      this.setState({ favourites: fav });
    }
  }

  clearFavourites() {
    this.setState({ favourites: [] });
  }

  render() {
    const pageOrLoader = this.state.loading ?
      <Loader /> : <Songs songs={this.state.songs} addSongToFavourites={this.addSongToFavourites}/>;
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClicked={this.handleButtonClick}
          loading={this.state.loading}
        />
        { pageOrLoader }
        <Favourites favourites={this.state.favourites} clearFavourites={this.clearFavourites}/>
      </div>
    );
  }
}

export default Page;
