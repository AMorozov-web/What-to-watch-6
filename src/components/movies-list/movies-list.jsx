import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {filmsTypeReview} from '../../consts';

const MoviesList = ({films}) => {
  const [, setSelectedFilmId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film} handleMouseOver={setSelectedFilmId}/>)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmsTypeReview.isRequired
  ).isRequired,
};

export default MoviesList;