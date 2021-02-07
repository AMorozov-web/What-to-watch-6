import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({addClass}) => {
  return (

    <div className="logo">
      <Link to="/" className= {`logo-link ${addClass}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  addClass: PropTypes.string,
};

export default Logo;
