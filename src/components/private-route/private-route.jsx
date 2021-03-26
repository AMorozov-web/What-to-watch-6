import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthStatus} from '../../store/reducers/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {checkAuth} from '../../store/api-actions';
import {LoadingScreen} from '../loading-screen/loading-screen';

const PrivateRoute = ({render, path, exact}) => {
  const [isChecked, setChecked] = useState(false);
  const authorizationStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.allSettled([dispatch(checkAuth())])
    .then(() => {
      setChecked(true);
    });
  }, []);

  if (!isChecked) {
    return <LoadingScreen />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={
        (routeProps) => authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : <Redirect to={AppRoute.LOGIN}/>
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
