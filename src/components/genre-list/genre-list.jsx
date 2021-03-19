import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {selectData} from '../../store/reducers/data/selectors';
import {changeGenre} from '../../store/reducers/data/action';
import {MAX_GENRES_COUNT, filmPropReview, Genre} from '../../consts';

const capitalizeFirstLetter = (string) => {
  return string && string[0].toUpperCase() + string.slice(1);
};

const GenreList = ({films}) => {
  const {genre} = useSelector(selectData);
  const dispatch = useDispatch();

  const [selectedGenre, setSelectedGenre] = useState(Genre.ALL);

  const genres = [Genre.ALL, ...(new Set(films.map((film) => film.genre.toLowerCase())))]
                .slice(0, MAX_GENRES_COUNT);

  const selectGenre = (evt) => {
    evt.preventDefault();
    setSelectedGenre(evt.target.textContent.toLowerCase());
    dispatch(changeGenre(evt.target.textContent.toLowerCase()));
  };

  const getGenre = (genr) => {

    return (
      <li key={genr}
        className={`catalog__genres-item ${selectedGenre === genr.toLowerCase() ? `catalog__genres-item--active` : ``}`}
      >
        <a href="" className="catalog__genres-link" onClick={selectGenre}>
          {capitalizeFirstLetter(genr)}
        </a>
      </li>
    );
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genr) => getGenre(genr))}
    </ul>
  );
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {GenreList};
