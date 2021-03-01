const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  // LOAD_PROMO: `data/loadPromo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  // loadPromo: (promo) => ({
  //   type: ActionType.LOAD_PROMO,
  //   payload: promo,
  // }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

export {
  ActionType,
  ActionCreator,
};
