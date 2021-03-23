import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendReview} from '../../store/api-actions';
import {redirectToRoute} from '../../store/middleware/action';
import {ReviewValidation} from '../../consts';

const CommentForm = ({id}) => {
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });
  const [isCommentValid, setCommentValid] = useState(false);

  const handleRatingChange = (evt) => {
    const {name, defaultValue} = evt.target;
    setReview({...review, [name]: defaultValue});
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
    const isRatingValid = review.rating >= ReviewValidation.MIN_RATING && review.rating <= ReviewValidation.MAX_RATING;
    const isTextValid = review.comment.length >= ReviewValidation.MIN_TEXT_LENGTH
                      && review.comment.length <= ReviewValidation.MAX_TEXT_LENGTH;

    setCommentValid(isRatingValid && isTextValid);
  }, [review]);

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
          <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} onChange={handleRatingChange}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          defaultValue={``}
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
