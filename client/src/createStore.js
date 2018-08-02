
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

export function configureStore(){
  return createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}




import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    console.log(`the state is ${state.count}`)
       console.log(`the action is ${action.type}`)
    render();

  };

  function getState() {
    return state;
  };



  return{
    dispatch,
    getState
  };
}
