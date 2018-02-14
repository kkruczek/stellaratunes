import React from 'react';
import PropTypes from 'prop-types';

function Song(props) {
  return (
    <div>
      <p>
        {props.artistName} - <a href={props.trackViewUrl}>{props.trackName}</a>
        {props.children}
      </p>
    </div>
  );
}

Song.propTypes = {
  artistName: PropTypes.string,
  trackName: PropTypes.string,
  trackViewUrl: PropTypes.string,
  children: PropTypes.string
};

export default Song;
