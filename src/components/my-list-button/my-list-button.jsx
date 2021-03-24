import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {changeFilmFavoriteStatus} from '../../store/api-actions';

const MyListButton = ({isFavorite, id}) => {
  const dispatch = useDispatch();

  const handleMyListButtonClick = (evt) => {
    evt.preventDefault();

    const status = isFavorite ? false : true;

    dispatch(changeFilmFavoriteStatus(id, status));
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleMyListButtonClick}>
      {isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list" />
        </svg>
        :
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add" />
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export {MyListButton};
