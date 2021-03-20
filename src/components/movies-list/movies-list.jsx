import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectFilmsByGenre} from '../../store/reducers/data/selectors';
import {filmPropReview} from '../../consts';
import {MovieCard} from '../movie-card/movie-card';

const MoviesList = ({films}) => {
  const filteredFilms = useSelector(selectFilmsByGenre);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film} />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ),
};

export {MoviesList};
