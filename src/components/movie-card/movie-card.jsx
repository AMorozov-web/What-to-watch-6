import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmTypeReview} from '../../consts';

const MovieCard = ({film, handleMouseOver}) => {
  const href = `/films/${film.id}`;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => handleMouseOver(film.id)}>
      <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.title} width={280} height={175} />
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
  film: filmTypeReview.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};

export default MovieCard;
