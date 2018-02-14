import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';
import Song from '../Song';
import Button from '../Button/index';

function Favourites({ favourites, onClick }) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {
        favourites.map((song, index) =>
          (
            <Song
              key={song.collectionId + song.trackId}
              artistName={song.artistName}
              trackName={song.trackName}
              trackViewUrl={song.trackViewUrl}
            >
              <Button type="danger" onButtonClick={() => onClick(index)}>
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
  favourites: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func
};

export default Favourites;
