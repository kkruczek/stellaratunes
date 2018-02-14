import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';
import Song from '../Song';
import Button from '../Button/index';

function Favourites(props) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {
        props.favourites.map((song, index) =>
          (
            <Song
              key={song.collectionId + song.trackId}
              artistName={song.artistName}
              trackName={song.trackName}
              trackViewUrl={song.trackViewUrl}
            >
              <Button type="danger" onButtonClick={() => props.onClick(index)}>
                X
              </Button>
            </Song>
          ))
      }
      </div>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object)
};

export default Favourites;
