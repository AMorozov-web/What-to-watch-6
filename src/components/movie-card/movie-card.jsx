import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {filmPropValidation, PLAY_DELAY_IN_MS} from '../../consts';
import {VideoPlayer} from '../video-player/video-player';

const MovieCard = ({film}) => {
  const href = `/films/${film.id}`;

  const [isPlaying, setPlaying] = useState(null);
  const videoPlayerRef = useRef();
  const playerTimeoutRef = useRef();

  const handleMouseEnter = () => {
    playerTimeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, PLAY_DELAY_IN_MS);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    window.clearTimeout(playerTimeoutRef.current);
  };

  useEffect(() => {
    if (isPlaying === null) {
      return;
    }

    if (isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.load();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      window.clearTimeout(playerTimeoutRef.current);
      playerTimeoutRef.current = null;
    };
  }, []);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}>
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
  film: filmPropValidation,
};

export {MovieCard};
