import initialState from './initialState';
import {GUEST_LOGIN} from '../actions/user-actions'
import {SIGN_UP} from '../actions/user-actions'


export default (state = initialState.users, action) => {
  switch(action.type) {

    case GUEST_LOGIN:
      return [action.payload];

    case SIGN_UP:
        return [action.payload];

    default:
      return state
    }
}
