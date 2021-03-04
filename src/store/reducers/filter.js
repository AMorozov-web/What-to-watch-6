import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../../consts';
import {changeGenre} from '../action';

const initialState = {
  genre: Genre.ALL,
};

const filter = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    return {
      ...state,
      genre: action.payload,
    };
  });
});

export {filter};
