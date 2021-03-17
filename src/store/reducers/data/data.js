import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../../../consts';
import {loadFilms, loadPromo, changeGenre} from './action';

const initialState = {
  films: [],
  promo: {},
  isFilmsLoaded: false,
  isPromoLoaded: false,
  genre: Genre.ALL,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.isFilmsLoaded = true;
    state.films = action.payload;
  });
  builder.addCase(loadPromo, (state, action) => {
    state.isPromoLoaded = true;
    state.promo = action.payload;
  });
  builder.addCase(changeGenre, (state, action) => {
    return {
      ...state,
      genre: action.payload,
    };
  });
});

export {data};
