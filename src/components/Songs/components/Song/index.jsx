import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';
import './styles.css';

function Song({ song, addSongToFavourites }) {
  return (
    <div className="song">
      <div className="track">{song.trackName}</div>
      <div className="artist">{song.artistName}</div>
      <Button type="secondary" onButtonClick={() => addSongToFavourites(song)}>Fav!</Button>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.shape({
    trackName: PropTypes.string,
    artistName: PropTypes.string
  }),
  addSongToFavourites: PropTypes.func
};

export default Song;
