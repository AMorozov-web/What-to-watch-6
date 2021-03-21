import {loadFilms, loadPromo, collectGenres} from './reducers/data/action';
import {requireAuthorization, setAuthInfo} from './reducers/user/action';
import {redirectToRoute} from './middleware/action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../consts';

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data));
      dispatch(collectGenres(data));
    })
);

const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(data));
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);

export {
  fetchFilms,
  fetchPromo,
  login,
  checkAuth,
};
