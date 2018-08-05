import React from 'react';
import './index.css';
import App from './App';
<<<<<<< master
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './login';
import Categories from './components/categories';
import Home from './Home';

const Index = () => {
  return (
    <div>


    </div>
  );
};





ReactDOM.render(
<Router>
<React.Fragment>
  <Route path="/" component={Header} />
     <Route exact path="/" component={Home} />
   <Route exact path="/index" component={Index} />
<Route exact path="/login" component={Login} />
<Route exact path="/categories" component={Categories} />

   </React.Fragment>
  </Router>,
   document.getElementById('root'));
registerServiceWorker();
=======
import Header from './components/header';
import Login from './login';
import Home from './Home';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';
>>>>>>> Took out unneeded imports


const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const store = createStore(rootReducer,
{
  categories: [],
  votes: [],
  posts: []
}, allStoreEnhancers
 );



// export function render() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )




store.dispatch({ type: '@@INIT' });
