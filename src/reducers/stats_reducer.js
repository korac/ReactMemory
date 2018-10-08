import { AUTH_USER, UNAUTH_USER, REGISTER_USER } from '../actions/types';

export default function(
  state = { authenticated: false, totalCardPairs: 5 },
  action
) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, username: action.payload };
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, username: null, authenticated: false };
    default:
      return state;
  }
}
