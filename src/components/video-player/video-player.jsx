import React from 'react';
import PropTypes from 'prop-types';
import {filmPropReview} from '../../consts';

const VideoPlayer = ({film, videoPlayerRef}) => {

  return (
    <video ref={videoPlayerRef} poster={film.previewImage} src={film.previewVideoLink} width="100%" height="100%" muted />
  );
};

VideoPlayer.propTypes = {
  film: filmPropReview,
  videoPlayerRef: PropTypes.object.isRequired,
};

export {VideoPlayer};
