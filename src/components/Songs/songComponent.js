import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Song(props) {
  const handleClick = () => {
    props.addToFavourites(props.song);
  };

  return (
    <div className="songRow">
      { props.song }
      <button onClick={handleClick}> Favourites! </button>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.string,
  addToFavourites: PropTypes.func
};

export default Song;
