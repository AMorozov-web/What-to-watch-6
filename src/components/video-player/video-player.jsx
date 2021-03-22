import React from 'react';
import PropTypes from 'prop-types';
import {filmPropValidation} from '../../consts';

const VideoPlayer = ({film, videoPlayerRef}) => {

  return (
    <video
      ref={videoPlayerRef}
      poster={film.previewImage}
      src={film.previewVideoLink}
      width="100%"
      height="100%"
      preload="none"
      muted />
  );
};

VideoPlayer.propTypes = {
  film: filmPropValidation,
  videoPlayerRef: PropTypes.object.isRequired,
};

export {VideoPlayer};
