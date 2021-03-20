import {createAction} from '@reduxjs/toolkit';
import {adaptToClient} from '../../../services/adapter';
import {MAX_GENRES_COUNT, Genre} from '../../../consts';

const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  COLLECT_GENRES: `data/collectGenres`,
};

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films.map(adaptToClient),
  };
});

const collectGenres = createAction(ActionType.COLLECT_GENRES, (films) => {
  const genresFromFilms = new Set(films.map((film) => film.genre.toLowerCase()));

  return {
    payload: [Genre.ALL, ...genresFromFilms].slice(0, MAX_GENRES_COUNT),
  };
});

const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => {
  return {
    payload: adaptToClient(promo),
  };
});

export {
  changeGenre,
  loadFilms,
  loadPromo,
  collectGenres,
};
