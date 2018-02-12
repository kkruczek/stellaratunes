import React, { Component } from 'react';
import update from 'immutability-helper';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import TunesService from '../../services/TunesService';
import FavSongsService from '../../services/FavSongsService';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: [],
      query: '',
      isLoading: false
    };

    this.tunesService = new TunesService();
    this.favSongsService = new FavSongsService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addSongToFavorites = this.addSongToFavorites.bind(this);
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      console.log(data);
    });

    this.fetchFavSongs();
  }

  getSongs(query) {
    const previousState = this.state.songs;

    this.tunesService.getData(query)
      .then((data) => {
        const song = data[0].trackName;
        const newState = update(this.state.songs, {
          $push: [song]
        });
        this.setState({
          songs: newState,
          query: '',
          isLoading: false
        });
      })
      .catch((error) => {
        console.log('Nie znaleziono piosenki');
        console.log(error);
        this.setState({
          songs: previousState,
          query: '',
          isLoading: false
        });
      });
  }

  fetchFavSongs() {
    const cachedFavSongs = this.favSongsService.fetchFavSongs();

    if (cachedFavSongs) {
      this.setState({
        favourites: cachedFavSongs
      });
    }
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  }

  handleButtonClick() {
    this.setState({
      isLoading: true
    });

    if (this.state.query !== '') {
      this.getSongs(this.state.query);
    }
  }

  addSongToFavorites(favItem) {
    console.log(favItem);
    const newState = update(this.state.favourites, {
      $push: [favItem]
    });
    this.setState({
      favourites: newState
    });
    this.favSongsService.setFavSongs(newState);
  }

  render() {
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        <Songs
          isLoading={this.state.isLoading}
          songs={this.state.songs}
          addToFavourites={this.addSongToFavorites}
        />
        <Favourites favourites={this.state.favourites}/>
      </div>
    );
  }
}

export default Page;
