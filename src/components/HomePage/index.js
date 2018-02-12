import React, { Component } from 'react';
import update from 'immutability-helper';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import TunesService from '../../services/TunesService';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: [],
      query: ''
    };

    this.tunesService = new TunesService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
  }

  componentDidMount() {
    console.log('pobierz z localstorage');    
  }

  getSongs(query) {
    const previousState = this.state.songs;

    this.tunesService.getData(query)
      .then((data) => {
        console.log(data);
        const song = data[0].trackName;
        console.log(song);
        const newState = update(this.state.songs, {
          $push: [song]
        });
        this.setState({
          songs: newState,
          query: ''
        });
      })
      .catch((error) => {
        console.log('Nie znaleziono piosenki');
        console.log(error);
        this.setState({
          songs: previousState,
          query: ''
        });
      });
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  }

  handleButtonClick() {
    if (this.state.query !== '') {
      this.getSongs(this.state.query);
    }
  }

  addToFavourites(favItem) {
    console.log('idzie!');
    const newState = update(this.state.favourites, {
      $push: [favItem]
    });
    this.setState({
      favourites: newState
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        <Songs songs={this.state.songs} addToFavourites={this.addToFavourites} />
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites favourites={this.state.favourites}/>
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
