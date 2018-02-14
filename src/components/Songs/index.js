import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';
import Button from '../Button/index';

function Songs(props) {
  return (
    <div className="container">
      {
        props.songs.map((song, index) =>
          (
            <Song
              key={song.collectionId + song.trackId}
              artistName={song.artistName}
              trackName={song.trackName}
              trackViewUrl={song.trackViewUrl}
            >
              <br />
              <Button type="secondary" onButtonClick={() => props.addToFavourite(index)}>
                Add to favourite
              </Button>
            </Song>
          ))
      }
      {/* map */}
      {/* Homework: Change div to Song component(create one) */}
      {/* In song component add a Button. */}
      {/* On Button click the song should be added to favourites */}
      {/* state of Page component, and shown in Favourites. */}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object)
};

export default Songs;
