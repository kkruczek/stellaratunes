import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song/index';

function Songs(props) {
  const songs = props.songs.map(song => (
    <Song key={song.trackId} song={song} addSongToFavourites={props.addSongToFavourites}/>
  ));

  return (
    <div className="container">
      <strong>List of songs:</strong>
      {songs}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  addSongToFavourites: PropTypes.func
};

export default Songs;
