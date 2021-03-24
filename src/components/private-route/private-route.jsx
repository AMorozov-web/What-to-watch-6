import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectAuthStatus} from '../../store/reducers/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../consts';

const PrivateRoute = ({render, path, exact}) => {
  const authorizationStatus = useSelector(selectAuthStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) =>
        authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : <Redirect to={AppRoute.LOGIN}/>
      }
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
