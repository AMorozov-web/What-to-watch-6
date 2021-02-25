import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {filmPropReview} from '../../consts';
import {Logo} from '../logo/logo';
import {Tabs} from '../tabs/tabs';
import {MoreLikeThis} from '../more-like-this/more-like-this';

const FilmPage = ({films}) => {
  const id = +useParams().id;
  const selectedFilm = films.find((film) => film.id === id);
  const {
    title,
    genre,
    released,
    backgroundImage,
    backgroundColor,
    posterImage,
  } = selectedFilm;

  const style = {
    backgroundColor,
  };

  return (
    <>
      <section className="movie-card movie-card--full" style={style}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <Tabs film={selectedFilm}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLikeThis films={films} genre={genre} selectedFilmId={id}/>
        <footer className="page-footer">
          <Logo centered={true}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {FilmPage};
