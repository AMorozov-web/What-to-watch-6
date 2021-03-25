import React from 'react';
import {useSelector} from 'react-redux';
import {selectAllFilms} from '../../store/reducers/data/selectors';
import {Logo} from '../logo/logo';
import {MoviesList} from '../movies-list/movies-list';
import {UserBlock} from '../user-block/user-block';

const MyListPage = () => {
  const films = useSelector(selectAllFilms);
  const filmsInFavorite = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={filmsInFavorite}/>
      </section>
      <footer className="page-footer">
        <Logo centered />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {MyListPage};
