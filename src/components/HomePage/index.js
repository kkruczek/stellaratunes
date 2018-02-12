import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import Loader from '../Loader';
import TunesService from '../../services/TunesService';
import FavouritesService from '../../services/FavouritesService';

class Page extends Component {
  constructor() {
    super();

    this.favouritesService = new FavouritesService();
    this.tunesService = new TunesService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAddSongToFavourites = this.handleAddSongToFavourites.bind(this);

    this.state = {
      songs: [],
      favourites: this.favouritesService.load(),
      query: '',
      loading: false
    };
  }

  componentDidMount() {
    this.searchSongs('Pink Floyd');
  }

  handleInputChange(evt) {
    const { value } = evt.target;

    this.setState({
      query: value
    });
  }

  handleButtonClick() {
    this.searchSongs(this.state.query);
  }

  searchSongs(query) {
    this.setState({ loading: true });
    this.tunesService.getSongs(query).then((data) => {
      this.setState({
        songs: data,
        loading: false
      });
    });
  }

  handleAddSongToFavourites(song) {
    if (this.state.favourites.find(s => s.trackId === song.trackId) === undefined) {
      const newFavourites = [...this.state.favourites, song];
      this.favouritesService.save(newFavourites);
      this.setState({ favourites: newFavourites });
    }
  }

  render() {
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        {
          !this.state.loading &&
          <Songs songs={this.state.songs} addSongToFavourites={this.handleAddSongToFavourites} />
        }
        {this.state.loading && <Loader />}
        <Favourites favourites={this.state.favourites} />
      </div>
    );
  }
}

export default Page;
