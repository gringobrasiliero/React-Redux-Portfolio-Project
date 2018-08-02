

let state = {categories: []}

export default function categoriesReducer(state = {
  categories: [],
  loading: false
}, action) {
  switch (action.type) {

    case 'LOADING_CATEGORIES':
         return Object.assign({}, state, {loading: true})



    case 'FETCH_CATEGORIES':
      return {categories: action.payload}

    default:
      return state;
    }
};

function dispatch(action){
    state = categoriesReducer(state, action)
    render()
}

function render(){
    document.innerHTML = state.categories
}

dispatch({ type: '@@INIT' })
