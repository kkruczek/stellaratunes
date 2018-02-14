import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import Loader from '../Loader';
import TunesService from '../../services/TunesService';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: [],
      query: '',
      loader: true
    };

    this.tunesService = new TunesService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addSongToFavourites = this.addSongToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      this.getSongs(data);
      this.toggleLoader();
    });
  }

  getSongs(songs) {
    this.setState({
      songs
    });
  }

  toggleLoader() {
    this.setState({
      loader: !this.state.loader
    });
  }

  handleButtonClick() {
    this.toggleLoader();
    this.tunesService.getData(this.state.query).then((data) => {
      this.getSongs(data);
      this.toggleLoader();
    });
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;

    this.setState({
      [name]: value
    });
  }

  addSongToFavourites(song) {
    this.setState({
      favourites: [
        ...this.state.favourites,
        this.state.songs[song]
      ]
    });
  }

  removeFromFavourites(song) {
    const favourites = [...this.state.favourites];
    favourites.splice(song, 1);
    this.setState({
      favourites
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onClick={this.handleButtonClick}
        />
        {this.state.loader && (<Loader />)}
        <Songs
          songs={this.state.songs}
          addToFavourite={this.addSongToFavourites}
        />
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites
          favourites={this.state.favourites}
          onClick={this.removeFromFavourites}
        />
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
