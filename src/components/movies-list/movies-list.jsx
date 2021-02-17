import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import PropTypes from 'prop-types';
import {filmsTypeReview} from '../../consts';

const MoviesList = ({films}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.id} film={film} />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmsTypeReview.isRequired
  ).isRequired,
};

export default MoviesList;
