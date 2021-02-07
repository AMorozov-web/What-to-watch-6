import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const NotFoundPage = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div className="sign-in user-page__content">
        <h1>404.</h1>
        <h2>Page Not Found</h2>
        <Link to="/" className="logo__link">
          <span>Go to Main page</span>
        </Link>
      </div>
      <footer className="page-footer">
        <Logo inFooter/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
};

export default NotFoundPage;
