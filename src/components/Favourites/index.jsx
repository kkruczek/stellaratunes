import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text';
import Button from '../Button';

function Favourites({ favourites = [], clearFavourites }) {
  const list = favourites.map(song => (
    <li className="fav-item" key={song.trackId}>{song.trackName}</li>
  ));

  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
        <Button type="primary" onButtonClick={clearFavourites}>Clear</Button>
      </div>
      <ul className="elements">
        {list}
      </ul>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired
  })).isRequired,
  clearFavourites: PropTypes.func
};

export default Favourites;
