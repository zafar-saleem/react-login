import * as types from './index';

export const registerUserAction = (user) => {
  console.log(user);
  return {
    type: types.REGISTER_USER,
    user
  }
};