import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';

function Favourites({ favourites, removeFavourite }) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        { favourites.map(f => (
          <div
            className="fav-element"
            key={f.trackId}
            onClick={() => { removeFavourite(f); }}
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
          >
            <span className="fav-artist">{f.artistName}</span>
            <span className="fav-track">{f.trackName}</span>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Favourites;

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object),
  removeFavourite: PropTypes.func
};
