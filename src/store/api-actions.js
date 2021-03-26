import {
  loadFilms,
  loadPromo,
  collectGenres,
  loadFavorites,
  loadReviewsById,
} from './reducers/data/action';
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

const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data)))
);

const fetchReviewsById = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviewsById(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(data));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
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

const sendReview = (id, sendData) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, sendData)
    .then(({data}) => dispatch(loadReviewsById(data)))
);

const changeFilmFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status ? 1 : 0}`)
    .then(() => dispatch(fetchFavorites()))
);

export {
  fetchFilms,
  fetchPromo,
  fetchFavorites,
  fetchReviewsById,
  login,
  checkAuth,
  sendReview,
  changeFilmFavoriteStatus,
};
