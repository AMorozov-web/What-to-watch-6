import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmPropReview, PLAY_DELAY_IN_MS} from '../../consts';
import {VideoPlayer} from '../video-player/video-player';

const MovieCard = ({film, setSelectedFilmId}) => {
  const href = `/films/${film.id}`;

  const [isPlaying, setPlaying] = useState(null);
  const videoPlayerRef = useRef();
  const playerTimeoutRef = useRef();

  const onMouseEnter = () => {
    setSelectedFilmId(film.id);
    playerTimeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, PLAY_DELAY_IN_MS);
  };

  const onMouseLeave = () => {
    setSelectedFilmId(null);
    setPlaying(false);
    window.clearTimeout(playerTimeoutRef.current);
  };

  useEffect(() => {
    if (isPlaying === null) {
      return () => {};
    }

    if (isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.load();
    }

    return () => window.clearTimeout(playerTimeoutRef.current);
  }, [isPlaying]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter()}
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

export {MovieCard};
