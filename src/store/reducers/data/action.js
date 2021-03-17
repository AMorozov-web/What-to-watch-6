import {createAction} from '@reduxjs/toolkit';
import {adaptToClient} from '../../../services/adapter';
import {ActionType} from '../../../consts';

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
