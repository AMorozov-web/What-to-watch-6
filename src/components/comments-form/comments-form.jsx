import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendReview} from '../../store/api-actions';
import {redirectToRoute} from '../../store/middleware/action';
import {RATING_STARS_COUNT, ReviewTextValidation} from '../../consts';

const getStar = (value) => {

  return (
    <React.Fragment key={`star-${value}`}>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" defaultValue={value} />
      <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
    </React.Fragment>
  );
};

const ratingStars = Array(RATING_STARS_COUNT).fill().map((_, i) => getStar(i));

const CommentForm = ({id}) => {
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });
  const [isCommentValid, setCommentValid] = useState(false);

  const handleRatingChange = (evt) => {
    const {defaultValue} = evt.target;
    setReview({...review, rating: defaultValue});
  };

  const handleTextChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, comment: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendReview(id, review));
    dispatch(redirectToRoute(`/films/${id}`));
  };

  useEffect(() => {
    const isRatingValid = review.rating !== 0;
    const isTextValid = review.comment.length >= ReviewTextValidation.MIN_TEXT_LENGTH
                      && review.comment.length <= ReviewTextValidation.MAX_TEXT_LENGTH;

    setCommentValid(isRatingValid && isTextValid);
  }, [review]);

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={handleRatingChange}>
          {ratingStars}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength={ReviewTextValidation.MIN_TEXT_LENGTH}
          maxLength={ReviewTextValidation.MAX_TEXT_LENGTH}
          onChange={handleTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isCommentValid}>Post</button>
        </div>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export {CommentForm};
