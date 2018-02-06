import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';
import './style.css';

function Song({ song, addSongToFavourites }) {
  return (
    <div className="song">
      <span className="artist">{song.artistName}</span>
      <span className="track">{song.trackName}</span>
      <Button onButtonClick={() => { addSongToFavourites(song); }}>Favourite</Button>
    </div>
  );
}

export default Song;

Song.propTypes = {
  song: PropTypes.shape({
    artistName: PropTypes.string,
    trackName: PropTypes.string
  }),
  addSongToFavourites: PropTypes.func
};
