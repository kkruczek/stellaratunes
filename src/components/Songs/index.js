import React from 'react';
import PropTypes from 'prop-types';
import Song from './components/Song';
import SongShape from '../Shapes/song';

function Songs({ songs, addSongToFavourites }) {
  return (
    <div>
      {songs.map(song => (
        <Song song={song} key={song.trackId} addSongToFavourites={addSongToFavourites} />))}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape(SongShape)).isRequired,
  addSongToFavourites: PropTypes.func
};

export default Songs;
