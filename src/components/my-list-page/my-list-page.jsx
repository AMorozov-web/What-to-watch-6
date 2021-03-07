import React from 'react';
import {useSelector} from 'react-redux';
import {Logo} from '../logo/logo';
import {MoviesList} from '../movies-list/movies-list';

const MyListPage = () => {
  const {films} = useSelector((state) => state.DATA);
  const filmsInFavorite = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={filmsInFavorite}/>
      </section>
      <footer className="page-footer">
        <Logo centered={true}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {MyListPage};
