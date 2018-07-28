
import initialState from './initialState';

export let state;
export default (state = initialState.votes, action) => {
  switch(action.type) {

    case 'UP_VOTE':
    return state + 1;
  
    case 'DOWN_VOTE'
    return state - 1



    default:
      return state
  }
}
