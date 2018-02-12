import React, { Component } from 'react';
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
  }

  componentDidMount() {
    /* tutaj dodaj local storage */
    console.log('pobierz z local stoarge');
  }

  getSongs(query) {
    this.tunesService.getData(query)
      .then((data) => {
        console.log(data);
        console.log(data[0].trackName);
      })
      .catch((error) => {
        console.log(error);
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

  render() {
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        Page!
        <Songs songs={this.state.songs}/>
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites favourites={this.state.favourites}/>
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
