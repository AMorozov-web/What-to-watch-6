import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
      </header>
      <div className="sign-in user-page__content">
        <h1>404.</h1>
        <h2>Page Not Found</h2>
        <Link to="/" className="logo__link">
          <span>Go to Main page</span>
        </Link>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
};

export default NotFoundPage;
