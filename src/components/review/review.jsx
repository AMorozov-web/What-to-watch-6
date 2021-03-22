import React from 'react';
import dayjs from 'dayjs';
import {reviewPropValidation} from '../../consts';

const Review = ({review}) => {
  const {
    user: {
      name,
    },
    rating,
    comment,
    date,
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={dayjs(date).format(`YYYY-MM-DD`)}>
            {dayjs(date).format(`MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">
        {rating.toString().padStart(2, 0).replace(`.`, `,`)}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: reviewPropValidation,
};

export {Review};
