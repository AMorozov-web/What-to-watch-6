import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {AuthorizationStatus} from "./consts";
import {requireAuthorization} from './store/action';
import {checkAuth} from "./store/api-actions";
import {rootReducer} from './store/root-reducer';

// const adaptToCLient = (film) => {
//   const adaptedFilm = {
//     ...film,
//     title: film.name,
//     posterImage: film.poster_image,
//     previewImage: film.preview_image,
//     backgroundImage: film.background_image,
//     backgroundColor: film.background_color,
//     scoresCount: film.scores_count,
//     runTime: film.run_time,
//     isFavorite: film.is_favorite,
//     videoLink: film.video_link,
//     previewVideoLink: film.preview_video_link,
//   };

//   delete adaptedFilm.name;
//   delete adaptedFilm.poster_image;
//   delete adaptedFilm.preview_image;
//   delete adaptedFilm.background_image;
//   delete adaptedFilm.background_color;
//   delete adaptedFilm.scores_count;
//   delete adaptedFilm.run_time;
//   delete adaptedFilm.is_favorite;
//   delete adaptedFilm.video_link;
//   delete adaptedFilm.preview_video_link;

//   return adaptedFilm;
// };

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
