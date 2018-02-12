import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';

function Songs(props) {
  const songsList = props.songs.map(song => (
    <Song sons={song}/>
  ));

  return (
    <div className="container">
      {songsList}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string)
};

export default Songs;

/* map */
/* Homework: Change div to Song component(create one) */
/* In song component add a Button. */
/* On Button click the song should be added to favourites */
/* state of Page component, and shown in Favourites. */
