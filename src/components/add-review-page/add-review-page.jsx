import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectAllFilms} from '../../store/reducers/data/selectors';
import {AppRoute} from '../../consts';
import {Logo} from '../logo/logo';
import {CommentForm} from '../comments-form/comments-form';
import {UserBlock} from '../user-block/user-block';

const AddReviewPage = () => {
  const films = useSelector(selectAllFilms);
  const id = +useParams().id;
  const {
    title,
    backgroundImage,
    backgroundColor,
    posterImage,
  } = films.find((film) => film.id === id);

  const style = {
    backgroundColor,
  };

  return (
    <section className="movie-card movie-card--full" style={style}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.ROOT} className="breadcrumbs__link" >The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <CommentForm id={id} />
      </div>
    </section>
  );
};

export {AddReviewPage};
