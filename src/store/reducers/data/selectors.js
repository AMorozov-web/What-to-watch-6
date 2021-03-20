import {createSelector} from 'reselect';
import {Genre} from '../../../consts';

const selectData = (state) => state.DATA;

const selectFilmsByGenre = createSelector(
    selectData,
    ({films, selectedGenre}) => selectedGenre === Genre.ALL ? films : films.filter((film) => film.genre === selectedGenre)
);

export {
  selectData,
  selectFilmsByGenre,
};
