/* eslint-disable  jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import SongShape from '../../../Shapes/song';
import Button from '../../../Button';
import './styles.css';


function Song({ song, addSongToFavourites }) {
  return (
    <div className="song">
      <div className="song__artwork">
        <img src={song.artworkUrl30} alt="" />
      </div>
      <div className="song__name">
        {`${song.artistName} - ${song.trackName}`}
      </div>
      <div className="song__preview">
        <audio controls src={song.previewUrl} />
      </div>
      <div className="song__actions">
        <Button onButtonClick={() => addSongToFavourites(song)}>Add</Button>
      </div>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.shape(SongShape).isRequired,
  addSongToFavourites: PropTypes.func
};

export default Song;
