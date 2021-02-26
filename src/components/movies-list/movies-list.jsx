import React from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from '../movie-card/movie-card';
import {filmPropReview} from '../../consts';

const MoviesList = ({films}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film} />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {MoviesList};
