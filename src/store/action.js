import {createAction} from '@reduxjs/toolkit';
import {adaptToCLient} from '../services/adapter';

const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films.map(adaptToCLient),
  };
});

const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => {
  return {
    payload: promo,
  };
});

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export {
  ActionType,
  changeGenre,
  loadFilms,
  loadPromo,
  requireAuthorization,
};
