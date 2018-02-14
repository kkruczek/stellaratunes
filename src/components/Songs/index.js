import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';
import Button from '../Button/index';

function Songs({ songs, addToFavourite }) {
  return (
    <div className="container">
      {
        songs.map((song, index) =>
          (
            <Song
              key={song.collectionId + song.trackId}
              artistName={song.artistName}
              trackName={song.trackName}
              trackViewUrl={song.trackViewUrl}
            >
              <br />
              <Button type="secondary" onButtonClick={() => addToFavourite(index)}>
                Add to favourite
              </Button>
            </Song>
          ))
      }
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  addToFavourite: PropTypes.func
};

export default Songs;
