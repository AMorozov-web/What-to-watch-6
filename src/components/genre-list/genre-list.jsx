import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectData} from '../../store/reducers/data/selectors';
import {changeGenre} from '../../store/reducers/data/action';
import {MAX_GENRES_COUNT, Genre} from '../../consts';

const capitalizeFirstLetter = (string) => {
  return string && string[0].toUpperCase() + string.slice(1);
};

const GenreList = () => {
  const {films, selectedGenre} = useSelector(selectData);
  const dispatch = useDispatch();

  const genres = useMemo(() => {
    const genresFromFilms = new Set(films.map((film) => film.genre.toLowerCase()));

    return [Genre.ALL, ...genresFromFilms].slice(0, MAX_GENRES_COUNT);
  },
  [films]);

  const selectGenre = (evt) => {
    evt.preventDefault();
    dispatch(changeGenre(evt.target.textContent.toLowerCase()));
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

export {GenreList};
