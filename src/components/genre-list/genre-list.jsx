import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MAX_GENRES_COUNT, filmPropReview, Genre} from '../../consts';

const capitalizeFirstLetter = (string) => {
  return string && string[0].toUpperCase() + string.slice(1);
};

const GenreList = ({films}) => {
  const [selectedGenre, setSelectedGenre] = useState(Genre.ALL);

  const genres = [Genre.ALL, ...(new Set(films.map((film) => film.genre.toLowerCase())))]
                .slice(0, MAX_GENRES_COUNT);

  const selectGenre = (evt) => {
    evt.preventDefault();
    setSelectedGenre(evt.target.textContent.toLowerCase());
  };

  const getGenre = (genre) => {

    return (
      <li key={genre}
        className={`catalog__genres-item ${selectedGenre === genre.toLowerCase() ? `catalog__genres-item--active` : ``}`}
      >
        <a href="" className="catalog__genres-link" onClick={selectGenre}>
          {capitalizeFirstLetter(genre)}
        </a>
      </li>
    );
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => getGenre(genre))}
    </ul>
  );
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {GenreList};
