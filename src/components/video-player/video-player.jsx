import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectFilmById} from '../../store/reducers/data/selectors';

const VideoPlayer = ({id, videoPlayerRef, onPlayerPage}) => {
  const film = useSelector(selectFilmById(id));

  return (
    <video
      className={onPlayerPage && `player__video`}
      ref={videoPlayerRef}
      poster={film.previewImage}
      src={onPlayerPage ? film.VideoLink : film.previewVideoLink}
      width="100%"
      height="100%"
      preload="none"
      muted />
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  videoPlayerRef: PropTypes.object.isRequired,
  onPlayerPage: PropTypes.bool,
};

export {VideoPlayer};
