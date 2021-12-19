import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from 'components/Shared/Cookies';
import { setAccessTokenOnHeader } from 'api/logined';
import * as authAPI from 'api';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [SIGNUP, SIGNUP_SUCESS, SIGNUP_FALIURE] = createRequestSagaActionTypes('auth/SIGNIN');

export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const signUp = createAction(SIGNUP, ({ account, password, find_email, nickname }) => ({
  account,
  password,
  find_email,
  nickname,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
}
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
export function* signUpRegisterSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}

const initialState = {
  isLoggedIn: false,
  authError: null,
};

const auth = handleActions(
  {
    [LOGIN_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token: setCookie('refresh_token', `${token.refresh_token}`, {
        path: '/',
      }),
      token: setAccessTokenOnHeader(token.access_token),
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [REFRESH_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token: setCookie('refresh_token', `${token.refresh_token}`, {
        path: '/',
      }),
      token: setAccessTokenOnHeader(token.access_token),
      isLoggedIn: true,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCESS]: (state) => ({
      ...state,
    }),
    [SIGNUP_FALIURE]: (error) => ({
      ...error,
    }),
  },
  initialState
);

export default auth;
