import React from 'react';
import PropTypes from 'prop-types';
import Song from './components/Song';
import './styles.css';

function Songs({ songs, addSongToFavourites }) {
  const list = songs.map(song => (
    <Song key={song.trackId} song={song} addSongToFavourites={addSongToFavourites} />
  ));

  return (
    <div className="songList">
      {list}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  addSongToFavourites: PropTypes.func
};

export default Songs;
