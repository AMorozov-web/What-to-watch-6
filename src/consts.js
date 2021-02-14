import PropTypes from 'prop-types';

const filmsTypeReview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
});

export {
  filmsTypeReview,
};
