import React, {useState} from 'react';
import {filmPropReview, TabTypes} from '../../consts';

const getTabByType = (film, type = TabTypes.OVERVIEW) => {
  switch (type) {
    case TabTypes.OVERVIEW:
      return (``);
    case TabTypes.DETAILS:
      return (``);
    case TabTypes.REVIEWS:
      return (``);
  }
};

const Tabs = ({film}) => {
  const [selectedTab, setSelectedTab] = useState(TabTypes.OVERVIEW);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === TabTypes.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabByType(film, selectedTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: filmPropReview,
};

export default Tabs;
