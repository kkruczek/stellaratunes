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
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      console.log(data);
    });
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;

    console.log(value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <Header query={this.state.query} onInputChange={this.handleInputChange}/>
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
