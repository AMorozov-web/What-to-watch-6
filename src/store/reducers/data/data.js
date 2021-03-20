import {createReducer} from '@reduxjs/toolkit';
import {FILMS_IN_LIST_LIMIT_MIN, Genre} from '../../../consts';
import {loadFilms, loadPromo, changeGenre, collectGenres, increaseFilmsLimit} from './action';

const initialState = {
  films: [],
  genres: [],
  promo: {},
  isFilmsLoaded: false,
  isPromoLoaded: false,
  selectedGenre: Genre.ALL,
  filmsLimitInList: FILMS_IN_LIST_LIMIT_MIN,
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
      selectedGenre: action.payload,
    };
  });
  builder.addCase(collectGenres, (state, action) => {
    return {
      ...state,
      genres: action.payload,
    };
  });
  builder.addCase(increaseFilmsLimit, (state, action) => {
    return {
      ...state,
      filmsLimitInList: action.payload,
    };
  });
});

export {data};
