import React from 'react';
import PropTypes from 'prop-types';
import {filmTypeReview} from '../../consts';
import Logo from '../logo/logo';
import MovieCard from '../movie-card/movie-card';

const MyListPage = ({films}) => {

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
        <div className="catalog__movies-list">
          {films.map((film) => film.isFavorite ? <MovieCard key={film.id} film={film}/> : ``)}
        </div>
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

MyListPage.propTypes = {
  films: PropTypes.arrayOf(
      filmTypeReview.isRequired
  ).isRequired,
};

export default MyListPage;
