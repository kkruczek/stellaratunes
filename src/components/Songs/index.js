import React from 'react';
import PropTypes from 'prop-types';
import Song from './components/Song';

function Songs({ songs, addSongToFavourites }) {
  // trackId in each song is supposed to be unique, so it might work as key value
  return (
    <div>
      { songs.map(song => (
        <Song
          song={song}
          addSongToFavourites={addSongToFavourites}
          key={song.trackId}
        />
      )) }
    </div>
  );
}

export default Songs;

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  addSongToFavourites: PropTypes.func
};
