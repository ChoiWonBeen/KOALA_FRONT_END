import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, signUpRegisterSaga } from './auth';
import toggle from './toggle';
import loading from './loading';
import keyword,{
  inquiryKeywordSaga,
  getKeywordListSaga,
  deleteKeywordListSaga,
  moveKeywordItemSaga,
  readKeywordItemSaga} from './keyword';

const rootReducer = combineReducers({
  auth,
  loading,
  keyword,
  toggle
});

export function* rootSaga() {
  yield all([
    authSaga(), 
    refreshLoginSaga(), 
    signUpRegisterSaga(),
    inquiryKeywordSaga(),
    getKeywordListSaga(),
    deleteKeywordListSaga(),
    moveKeywordItemSaga(),
    readKeywordItemSaga()]);
}

export default rootReducer;
