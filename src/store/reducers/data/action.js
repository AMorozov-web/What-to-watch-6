import {createAction} from '@reduxjs/toolkit';
import {adaptToClient} from '../../../services/adapter';
import {MAX_GENRES_COUNT, FILMS_IN_LIST_OFFSET, Genre} from '../../../consts';

const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  COLLECT_GENRES: `data/collectGenres`,
  INCREASE_FILMS_LIMIT: `data/increaseFilmsLimit`,
};

const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films.map(adaptToClient),
  };
});

const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => {
  return {
    payload: adaptToClient(promo),
  };
});

const collectGenres = createAction(ActionType.COLLECT_GENRES, (films) => {
  const genresFromFilms = new Set(films.map((film) => film.genre.toLowerCase()));

  return {
    payload: [Genre.ALL, ...genresFromFilms].slice(0, MAX_GENRES_COUNT),
  };
});

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

const increaseFilmsLimit = createAction(ActionType.INCREASE_FILMS_LIMIT, (limit) => {
  return {
    payload: limit + FILMS_IN_LIST_OFFSET,
  };
});

export {
  changeGenre,
  loadFilms,
  loadPromo,
  collectGenres,
  increaseFilmsLimit,
};
