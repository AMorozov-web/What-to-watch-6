import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmPropReview, PLAY_DELAY_IN_MS} from '../../consts';
import VideoPlayer from '../video-player/video-player';

const MovieCard = ({film, setSelectedFilmId}) => {
  const href = `/films/${film.id}`;

  const [isPlaying, setPlaying] = useState(false);
  const [playTimeout, setPlayTimeout] = useState();
  const videoPlayerRef = useRef();

  const onMouseOver = () => {
    setSelectedFilmId(film.id);
    setPlayTimeout(setTimeout(() => {
      setPlaying(true);
    }, PLAY_DELAY_IN_MS));
  };

  const onMouseLeave = () => {
    setPlaying(false);
    window.clearTimeout(playTimeout);
  };

  useEffect(() => isPlaying ? videoPlayerRef.current.play() : videoPlayerRef.current.load(), [isPlaying]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOver()}
      onMouseLeave={() => onMouseLeave()}>
      <div className="small-movie-card__image">
        <VideoPlayer film={film} videoPlayerRef={videoPlayerRef} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={href}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  film: filmPropReview,
  setSelectedFilmId: PropTypes.func.isRequired,
};

export default MovieCard;
