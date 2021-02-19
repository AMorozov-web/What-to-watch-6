import React from 'react';
import PropTypes from 'prop-types';
import {
  filmsTypeReview,
} from '../../consts';

const MovieCard = ({film, handleMouseOver}) => {

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => handleMouseOver(film.id)}>
      <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  film: filmsTypeReview.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};

export default MovieCard;
