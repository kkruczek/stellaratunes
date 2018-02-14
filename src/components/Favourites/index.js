import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';
import SongShape from '../Shapes/song';

function Favourites({ favourites }) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="favourites__elements">
        {favourites.map(song => (
          <div className="favourites__song">
            {`${song.artistName} - ${song.trackName}`}
          </div>
        ))}
      </div>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.shape(SongShape))
};

export default Favourites;
