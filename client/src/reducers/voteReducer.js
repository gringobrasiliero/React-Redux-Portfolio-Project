export let state;

export default function voteReducer(state={
  upvote: 0,
  downvote: 0,

}, action) {
  switch(action.type) {
    case 'UP_VOTE':
    return {upvote: state.upvote + 1};

    case 'DOWN_VOTE':
    return {downvote: state.downvote + 1};

    default:
    return state;
  }
}

function dispatch(action){
    state = voteReducer(state, action)
}


function render(){
    document.setInnerHTML = state
}

// call the render function
