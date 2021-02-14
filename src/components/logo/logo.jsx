import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({centered, onMainPage}) => {
  return (

    <div className="logo">
      <Link to={onMainPage ? `` : `/`} className={`logo__link ${centered ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  centered: PropTypes.bool,
  onMainPage: PropTypes.bool,
};

export default Logo;
