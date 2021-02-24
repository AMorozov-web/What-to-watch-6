import React, {useState} from 'react';
import {filmPropReview, TabTypes} from '../../consts';
import FilmOverviewTab from '../film-overview-tab/film-overview-tab';

const getTabByType = (film, type) => {
  switch (type) {
    case TabTypes.OVERVIEW:
      return <FilmOverviewTab film={film} />;
    case TabTypes.DETAILS:
      return (``);
    case TabTypes.REVIEWS:
      return (``);
    default:
      return <FilmOverviewTab film={film} />;
  }
};

const Tabs = ({film}) => {
  const [selectedTab, setSelectedTab] = useState(TabTypes.OVERVIEW);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === TabTypes.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => setSelectedTab(TabTypes.OVERVIEW)}>Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => setSelectedTab(TabTypes.DETAILS)}>Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabTypes.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={() => setSelectedTab(TabTypes.DETAILS)}>Reviews</a>
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
