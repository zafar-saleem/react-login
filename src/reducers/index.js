import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  register, login
});

export default rootReducer;