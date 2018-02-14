import React from 'react';
import PropTypes from 'prop-types';

function Song({
  artistName,
  trackName,
  trackViewUrl,
  children
}) {
  return (
    <div>
      <p>
        {artistName} - <a href={trackViewUrl}>{trackName}</a>
        {children}
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
