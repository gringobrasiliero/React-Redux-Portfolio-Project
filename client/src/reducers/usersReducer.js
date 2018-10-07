import initialState from './initialState';
import {GUEST_LOGIN} from '../actions/user-actions'


export default (state = initialState.users, action) => {
  switch(action.type) {

    case GUEST_LOGIN:
    debugger;
      return [ action.payload];

    default:
      return state
    }
}
