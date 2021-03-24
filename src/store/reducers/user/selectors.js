const selectUser = (state) => state.USER;
const selectAuthStatus = (state) => state.USER.authorizationStatus;
const selectAuthInfo = (state) => state.USER.authInfo;

export {
  selectUser,
  selectAuthStatus,
  selectAuthInfo,
};
