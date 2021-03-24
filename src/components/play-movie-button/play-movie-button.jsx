import React from 'react';

const PlayMovieButton = () => {

  return (
    <button className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
};

export {PlayMovieButton};
