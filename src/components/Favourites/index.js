import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';
import Song from './../Songs/Song/index';

function Favourites(props) {
  const favourites = props.favourites.map(song => (
    <Song key={song.trackId} song={song} removeSongFromFavourites={props.removeSongFromFavourites}/>
  ));

  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {favourites}
      </div>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object),
  removeSongFromFavourites: PropTypes.func
};

export default Favourites;
