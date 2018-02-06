import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import TunesService from '../../services/TunesService';
import FavouritesSongsService from './../../services/FavouritesSongsService';
import Loader from './../Loader/index';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: [],
      query: '',
      loading: false
    };

    this.tunesService = new TunesService();
    this.favouritesService = new FavouritesSongsService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAddSongToFavourites = this.handleAddSongToFavourites.bind(this);
    this.handleRemoveSongFromFavourites = this.handleRemoveSongFromFavourites.bind(this);
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      console.log(data);
    });
    this.loadFavourites();
  }

  loadFavourites() {
    this.setState({ favourites: this.favouritesService.getFavouritesSongs() });
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;
    console.log(value);

    this.setState({
      [name]: value
    });
  }

  handleButtonClick() {
    this.setState({ loading: true });
    this.tunesService.getData(this.state.query)
      .then((data) => {
        this.setState({
          songs: data,
          loading: false
        });
      });
  }

  handleAddSongToFavourites(song) {
    if (!this.state.favourites.find(el => el.trackId === song.trackId)) {
      const updatedFavourites = [...this.state.favourites, song];
      this.setState({ favourites: updatedFavourites });
      this.favouritesService.saveFavouritesSongs(updatedFavourites);
    }
  }

  handleRemoveSongFromFavourites(song) {
    const updatedFavourites = this.state.favourites.filter(el => el.trackId !== song.trackId);
    this.setState({ favourites: updatedFavourites });
    this.favouritesService.saveFavouritesSongs(updatedFavourites);
  }

  render() {
    const songs = (
      this.state.loading ?
        <Loader /> :
        (
          <Songs
            songs={this.state.songs}
            addSongToFavourites={this.handleAddSongToFavourites}
          />
        )
    );

    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          handleButtonClick={this.handleButtonClick}
        />
        {songs}
        <Favourites
          favourites={this.state.favourites}
          removeSongFromFavourites={this.handleRemoveSongFromFavourites}
        />
      </div>
    );
  }
}

export default Page;
