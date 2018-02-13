import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text/index';

function Favourites(props) {
  const favouritesList = props.favourites.map(favItem => (
    <div key={favItem}>{favItem}</div>
  ));

  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {favouritesList}
      </div>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.string)
};

export default Favourites;
