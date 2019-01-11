export default function(state = [], action) {
  switch(action.type) {
    case 'REGISTER_USER_SUCCESS':
      return [...state, action.response];
    default:
      return state;
  }
}