import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './authenticationSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  console.log('WATEER');
  yield takeLatest(types.REGISTER_USER, registerSaga);
}