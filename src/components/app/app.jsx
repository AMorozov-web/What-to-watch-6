import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review.page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = ({titles}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage titles={titles} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id?">
          <FilmPage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage />
        </Route>
        <Route exact path="/player/:id?">
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
