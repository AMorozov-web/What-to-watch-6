import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {Logo} from '../logo/logo';
import {CommentForm} from '../comments-form/comments-form';
import {filmPropReview} from '../../consts';

const AddReviewPage = ({films}) => {
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
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <CommentForm />
      </div>
    </section>
  );
};

AddReviewPage.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {AddReviewPage};
