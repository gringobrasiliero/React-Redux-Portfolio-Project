
import initialState from './initialState';

export let state;
export default (state = initialState.votes, action) => {
  switch(action.type) {

    case 'UP_VOTE':
      return {upvote: state.upvote + 1};

    case 'DOWN_VOTE':
      return {downvote: state.downvote + 1};



    default:
      return state
  }
}
