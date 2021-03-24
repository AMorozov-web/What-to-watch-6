const selectAuthStatus = (state) => state.USER.authorizationStatus;
const selectAuthInfo = (state) => state.USER.authInfo;

export {
  selectAuthStatus,
  selectAuthInfo,
};
