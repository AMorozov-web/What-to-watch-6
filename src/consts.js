import PropTypes from 'prop-types';

const filmTypeReview = PropTypes.shape({
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
});

const getRatingText = (rating) => {
  switch (true) {
    case (rating === 10):
      return `Awesome`;
    case (rating >= 8 && rating < 10):
      return `Very good`;
    case (rating >= 5 && rating < 8):
      return `Good`;
    case (rating >= 3 && rating < 5):
      return `Normal`;
    default:
      return `Bad`;
  }
};

export {
  filmTypeReview,
  getRatingText,
};
