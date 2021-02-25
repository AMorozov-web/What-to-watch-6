import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '../logo/logo';

const NotFoundPage = () => {
  const style = {
    h1: {
      textAlign: `center`,
    },
    h2: {
      textAlign: `center`,
    },
    link: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      height: `54px`,
      color: `#d9cd8d`,
      textDecoration: `none`,
      border: `1px solid rgba(223,207,119,.36)`,
      borderRadius: `8px`,
    },
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div className="sign-in user-page__content">
        <h1 style={style.h1}>404.</h1>
        <h2 style={style.h2}>Page Not Found</h2>
        <Link to="/" style={style.link}>
          <span>Go to Main page</span>
        </Link>
      </div>
      <footer className="page-footer">
        <Logo centered={true}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {NotFoundPage};
