import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {
  filmPropReview,
} from '../../consts';

const App = ({films}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage films={films}/>
        </Route>
        <Route exact path="/films/:id">
          <FilmPage films={films}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage films={films}/>
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage films={films}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      filmPropReview
  ).isRequired,
};

export default App;
