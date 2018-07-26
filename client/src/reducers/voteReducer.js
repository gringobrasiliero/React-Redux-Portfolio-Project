export default function voteReducer(state=0, action) {
  switch(action.type) {
    case 'UP_VOTE':
    return state + 1;

    case 'DOWN_VOTE'
    return state - 1

    default:
    return state;
  }
}
