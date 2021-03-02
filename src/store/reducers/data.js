import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, loadPromo} from '../action';

const initialState = {
  films: [],
  promo: {},
  isFilmsLoaded: false,
  isPromoLoaded: false,
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
});

export {
  data,
};
