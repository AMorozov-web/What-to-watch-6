import {createAction} from '@reduxjs/toolkit';
import {adaptToClient} from '../../../services/adapter';

const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
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

const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => {
  return {
    payload: adaptToClient(promo),
  };
});

export {
  changeGenre,
  loadFilms,
  loadPromo,
};
