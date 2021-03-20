import React from 'react';
import PropTypes from 'prop-types';
import {MoviesList} from '../movies-list/movies-list';
import {filmPropReview, SIMILAR_FILMS_MAX_COUNT} from '../../consts';

const MoreLikeThis = ({films, genre, selectedFilmId}) => {
  const similarFilms = films.filter((film) => (film.genre === genre) && (film.id !== selectedFilmId));

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList films={similarFilms} count={SIMILAR_FILMS_MAX_COUNT}/>
    </section>
  );
};

MoreLikeThis.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
  genre: PropTypes.string.isRequired,
  selectedFilmId: PropTypes.number,
};

export {MoreLikeThis};
