import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import FILMS from './mocks/films';

ReactDOM.render(
    <App
      films={FILMS}
    />,
    document.querySelector(`#root`)
);
