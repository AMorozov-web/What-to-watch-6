import React from 'react';
import dayjs from 'dayjs';
import {filmPropReview} from '../../consts';

const FilmDetailsTab = ({film}) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released,
  } = film;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((star) => `${star} <br />`)}
              { /* Bill Murray, <br />
              Edward Norton, <br />
              Jude Law, <br />
              Willem Dafoe, <br />
              Saoirse Ronan, <br />
              Tony Revoloru, <br />
              Tilda Swinton, <br />
              Tom Wilkinson, <br />
              Owen Wilkinson, <br />
              Adrien Brody, <br />
              Ralph Fiennes, <br />
              Jeff Goldblum */ }
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{dayjs(runTime).format(`H mm`)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

FilmDetailsTab.propTypes = {
  film: filmPropReview,
};

export default FilmDetailsTab;
