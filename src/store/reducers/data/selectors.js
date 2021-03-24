import {createSelector} from 'reselect';
import {Genre} from '../../../consts';

const selectData = (state) => state.DATA;
const selectAllFilms = (state) => state.DATA.films;
const selectGenre = (state) => state.DATA.selectedGenre;

const selectFilmsByGenre = createSelector(
    selectAllFilms,
    selectGenre,
    (films, selectedGenre) =>
      selectedGenre === Genre.ALL ? films : films.filter((film) => film.genre.toLowerCase() === selectedGenre)
);

export {
  selectData,
  selectFilmsByGenre,
};
