import {createSelector} from 'reselect';
import {Genre} from '../../../consts';

const selectData = (state) => state.DATA;
const selectAllFilms = (state) => state.DATA.films;
const selectPromo = (state) => state.DATA.promo;
const selectGenre = (state) => state.DATA.selectedGenre;
const selectGenres = (state) => state.DATA.genres;
const selectFilmsLimit = (state) => state.DATA.filmsLimit;
const selectFilmsCount = (state) => state.DATA.shownFilmsCount;
const selectReviews = (state) => state.DATA.reviewsForSelectedFilm;
const selectFilmsLoaded = (state) => state.DATA.isFilmsLoaded;
const selectPromoLoaded = (state) => state.DATA.isPromoLoaded;
const selectReviewsLoaded = (state) => state.DATA.isReviewsLoaded;

const selectFilmsByGenre = createSelector(
    selectAllFilms,
    selectGenre,
    (films, selectedGenre) =>
      selectedGenre === Genre.ALL ? films : films.filter((film) => film.genre.toLowerCase() === selectedGenre)
);

export {
  selectData,
  selectAllFilms,
  selectGenre,
  selectFilmsLoaded,
  selectPromoLoaded,
  selectReviewsLoaded,
  selectReviews,
  selectGenres,
  selectFilmsLimit,
  selectPromo,
  selectFilmsCount,
  selectFilmsByGenre,
};
