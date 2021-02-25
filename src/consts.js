import PropTypes from 'prop-types';

const PLAY_DELAY_IN_MS = 1000;

const MINUTES_IN_HOUR = 60;

const TabTypes = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const filmPropReview = PropTypes.shape({
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
}).isRequired;

export {
  PLAY_DELAY_IN_MS,
  MINUTES_IN_HOUR,
  filmPropReview,
  TabTypes,
};
