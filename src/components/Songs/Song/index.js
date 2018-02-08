import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from './../../Button/index';

function Song(props) {
  return (
    <div className="song">
      <p>{props.song.artistName}</p>
      <p><strong>{props.song.trackName}</strong></p>
      { props.addSongToFavourites &&
        <Button
          type="secondary"
          onButtonClick={() => props.addSongToFavourites(props.song)}
        >Add to Favourites
        </Button> }
      { props.removeSongFromFavourites &&
        <Button
          type="secondary"
          onButtonClick={() => props.removeSongFromFavourites(props.song)}
        >Remove from Favourites
        </Button> }
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.objectOf(PropTypes.any),
  addSongToFavourites: PropTypes.func,
  removeSongFromFavourites: PropTypes.func
};

export default Song;
