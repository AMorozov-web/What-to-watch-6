import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectData} from '../../store/reducers/data/selectors';
import {increaseFilmsLimit} from '../../store/reducers/data/action';

const ShowMoreButton = () => {
  const {filmsLimit, shownFilmsCount} = useSelector(selectData);
  const dispatch = useDispatch();

  const increaseLimit = (evt) => {
    evt.preventDefault();
    dispatch(increaseFilmsLimit(filmsLimit));
  };

  if (filmsLimit >= shownFilmsCount) {
    return ``;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={increaseLimit}>Show more</button>
    </div>
  );
};

export {ShowMoreButton};
