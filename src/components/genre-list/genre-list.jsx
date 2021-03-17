import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {filmPropReview} from '../../consts';

const GenreList = ({films}) => {
  const [selectedGenre, setSelectedGenre] = useState();

  const selectGenre = (evt) => {
    evt.preventDefault();
    selectGenre(evt.target.textContent.toUpperCase());
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === TabType.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={selectGenre}>Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabType.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={selectGenre}>Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabType.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={selectGenre}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabByType(film, selectedTab)}
    </div>
  );
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export {GenreList};
