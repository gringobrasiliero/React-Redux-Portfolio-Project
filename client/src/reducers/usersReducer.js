import initialState from './initialState';
// import { SIGN_UP} from '../actions/user-actions'



export default (state = initialState.users, action) => {
  switch(action.type) {

    case 'SIGN_UP':
      return action.payload;
    default:
      return state
  }
}
